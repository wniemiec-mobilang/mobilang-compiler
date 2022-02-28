package wniemiec.mobilang;

import java.io.IOException;
import java.nio.file.Path;
import org.apache.commons.cli.CommandLine;
import org.apache.commons.cli.CommandLineParser;
import org.apache.commons.cli.DefaultParser;
import org.apache.commons.cli.Options;
import org.apache.commons.cli.ParseException;
import wniemiec.io.java.Consolex;
import wniemiec.io.java.LogLevel;
import wniemiec.mobilang.asc.export.exception.CodeExportException;
import wniemiec.mobilang.asc.export.exception.OutputLocationException;
import wniemiec.mobilang.scma.framework.exception.FactoryException;


/**
 * Application point entry. Responsible for parsing CLI arguments and running 
 * MobiLang compiler.
 */
public class App {
    
    //-------------------------------------------------------------------------
    //		Attributes
    //-------------------------------------------------------------------------
    private static final String LBL_MOBILANG;
    private static final String LBL_OUTPUT;
    private static final String LBL_FRAMEWORK_NAME;
    private static final String LBL_VERBOSE;
    private static String frameworkName;
    private static Path mobilangFilePath;
    private static Path outputLocationPath;


    //-------------------------------------------------------------------------
    //		Initialization block
    //-------------------------------------------------------------------------
    static {
        LBL_MOBILANG = "mobilang";
        LBL_OUTPUT = "output";
        LBL_FRAMEWORK_NAME = "framework";
        LBL_VERBOSE = "verbose";
    }


    //-------------------------------------------------------------------------
    //		Main
    //-------------------------------------------------------------------------
    public static void main(String[] args) {
        try {
            parseArgs(args);
            runCompiler();
        }
        catch (IllegalArgumentException e) {
            Consolex.writeError("Invalid cmd args: " + e.getMessage());
        }
        catch (Exception e) {
            Consolex.writeError("Fatal error: " + e.getMessage());
        }
    }


    //-------------------------------------------------------------------------
    //		Methods
    //-------------------------------------------------------------------------
    private static void parseArgs(String[] args) throws ParseException {
        CommandLine cmd = buildCmd(args);

        validateArgs(cmd);
        checkVerboseOption(cmd);

        frameworkName = getFrameworkCliArg(cmd);
        mobilangFilePath = getMobilangCliArg(cmd);
        outputLocationPath = getOutputCliArg(cmd);
    }

    private static CommandLine buildCmd(String[] args) throws ParseException {
        Options options = buildCliOptions();
        CommandLineParser parser = new DefaultParser();
        
        return parser.parse(options, args);
    }

    private static Options buildCliOptions() {
        Options options = new Options();

        options.addOption(LBL_MOBILANG, true, "MobiLang XML file");
        options.addOption(LBL_OUTPUT, true, "Output location");
        options.addOption(LBL_FRAMEWORK_NAME, true, "Framework name");
        options.addOption(LBL_VERBOSE, false, "Display debug messages");
        
        return options;
    }

    private static void validateArgs(CommandLine cmd) {
        if (!cmd.hasOption(LBL_MOBILANG)) {
            throw new IllegalArgumentException(LBL_MOBILANG + " is missing");
        }

        if (!cmd.hasOption(LBL_OUTPUT)) {
            throw new IllegalArgumentException(LBL_OUTPUT + " is missing");
        }
    }

    private static void checkVerboseOption(CommandLine cmd) {
        if (cmd.hasOption(LBL_VERBOSE)) {
            Consolex.setLoggerLevel(LogLevel.DEBUG);
        }
    }

    private static String getFrameworkCliArg(CommandLine cmd) {
        return cmd.getOptionValue(LBL_FRAMEWORK_NAME);
    }

    private static Path getMobilangCliArg(CommandLine cmd) {
        String mobilangCliArg = cmd.getOptionValue(LBL_MOBILANG);

        return normalizePath(Path.of(mobilangCliArg));
    }

    private static Path normalizePath(Path path) {
        return path.toAbsolutePath().normalize();
    }

    private static Path getOutputCliArg(CommandLine cmd) {
        String outputCliArg = cmd.getOptionValue(LBL_OUTPUT);

        return normalizePath(Path.of(outputCliArg));
    }

    private static void runCompiler() 
    throws IOException, FactoryException, wniemiec.mobilang.asc.parser.exception.FactoryException, 
    wniemiec.mobilang.asc.parser.exception.ParseException, OutputLocationException, 
    CodeExportException {
        MobiLangCompiler compiler = new MobiLangCompiler(
            mobilangFilePath, 
            outputLocationPath,
            frameworkName
        );

        Path appLocation = compiler.run();

        Consolex.writeInfo("Mobile apps generated at: " + appLocation);
    }
}