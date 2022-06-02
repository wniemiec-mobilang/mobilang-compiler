package wniemiec.mobilex;

import java.io.IOException;
import java.nio.file.Path;
import wniemiec.mobilang.ama.Ama;
import wniemiec.mobilang.ama.coder.exception.CoderException;
import wniemiec.mobilang.ama.export.exception.AppGenerationException;
import wniemiec.mobilang.ama.export.exception.CodeExportException;
import wniemiec.mobilang.ama.parser.exception.FactoryException;
import wniemiec.mobilang.ama.parser.exception.ParseException;
import wniemiec.mobilang.mast.Mast;


public class MobilexCompiler {

    //-------------------------------------------------------------------------
    //		Attributes
    //-------------------------------------------------------------------------
    private final Path mobilangFilePath;
    private final Path outputLocationPath;
    private final String frameworkName;
    private Path astFilePath;


    //-------------------------------------------------------------------------
    //		Constructor
    //-------------------------------------------------------------------------
    public MobilexCompiler(Path mobilangFilePath, Path outputLocationPath, String frameworkName) {
        this.mobilangFilePath = mobilangFilePath;
        this.outputLocationPath = outputLocationPath;
        this.frameworkName = frameworkName;
    }


    //-------------------------------------------------------------------------
    //		Methods
    //-------------------------------------------------------------------------
    public Path run() 
    throws IOException, FactoryException, ParseException, CodeExportException, 
    AppGenerationException, CoderException {
        runMast();
        
        return runAma();
    }

    private void runMast() throws IOException {
        Mast mast = new Mast(mobilangFilePath, outputLocationPath);
        
        astFilePath = mast.run();
    }

    private Path runAma() throws FactoryException, ParseException, 
    CodeExportException, AppGenerationException, CoderException, IOException {
        Ama ama = new Ama(astFilePath, outputLocationPath, frameworkName);
        
        return ama.run();
    }
}
