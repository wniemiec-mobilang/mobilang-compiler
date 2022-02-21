package wniemiec.mobilang;

import java.io.IOException;
import java.nio.file.InvalidPathException;
import java.nio.file.Path;
import wniemiec.io.java.Consolex;


/**
 * Application point entry. Responsible for parsing CLI arguments and running 
 * MobiLang compiler.
 */
public class App {
    
    //-------------------------------------------------------------------------
    //		Attributes
    //-------------------------------------------------------------------------
    private static String frameworkName;
    private static Path mobilangFilePath;
    private static Path outputLocationPath;


    //-------------------------------------------------------------------------
    //		Main
    //-------------------------------------------------------------------------
    public static void main(String[] args) {
        try {
            parseArgs(args);
            runCompiler();
        }
        catch (Exception e) {
            Consolex.writeError("Fatal error");
            e.printStackTrace();
        }
    }


    //-------------------------------------------------------------------------
    //		Methods
    //-------------------------------------------------------------------------
    private static void parseArgs(String[] args) {
        validateArgs(args);

        frameworkName = args[0];
        mobilangFilePath = Path.of(args[1]);
        outputLocationPath = Path.of(args[2]);
    }

    private static void validateArgs(String[] args) {
        if (args.length < 3) {
            Consolex.writeError("Missing args! Correct usage: <framework_name> <mobilang_file> <output_location>");
            System.exit(-1);
        }
    }

    private static void runCompiler() throws IOException {
        MobiLangCompiler compiler = new MobiLangCompiler(
            mobilangFilePath, 
            outputLocationPath,
            frameworkName
        );

        Path appLocation = compiler.run();

        Consolex.writeInfo("Applications location: " + appLocation);
    }
}