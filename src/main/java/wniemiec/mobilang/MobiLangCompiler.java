package wniemiec.mobilang;

import java.io.IOException;
import java.nio.file.Path;

import wniemiec.mobilang.asc.Asc;
import wniemiec.mobilang.asc.export.exception.CodeExportException;
import wniemiec.mobilang.asc.export.exception.OutputLocationException;
import wniemiec.mobilang.asc.parser.exception.FactoryException;
import wniemiec.mobilang.asc.parser.exception.ParseException;
import wniemiec.mobilang.mast.Mast;
import wniemiec.mobilang.scma.Scma;

public class MobiLangCompiler {

    //-------------------------------------------------------------------------
    //		Attributes
    //-------------------------------------------------------------------------
    private final Path mobilangFilePath;
    private final Path outputLocationPath;
    private final String frameworkName;
    private Path astFilePath;
    private Path sourceCodeFilePath;


    //-------------------------------------------------------------------------
    //		Constructor
    //-------------------------------------------------------------------------
    public MobiLangCompiler(Path mobilangFilePath, Path outputLocationPath, String frameworkName) {
        this.mobilangFilePath = mobilangFilePath;
        this.outputLocationPath = outputLocationPath;
        this.frameworkName = frameworkName;
    }


    //-------------------------------------------------------------------------
    //		Methods
    //-------------------------------------------------------------------------
    public Path run() 
    throws IOException, wniemiec.mobilang.scma.framework.exception.FactoryException, 
    FactoryException, ParseException, OutputLocationException, CodeExportException {
        runMast();
        runAsc();
        
        return runScma();
    }

    private void runMast() throws IOException {
        Mast mast = new Mast(mobilangFilePath, outputLocationPath);
        
        astFilePath = mast.run();
    }

    private void runAsc() 
    throws FactoryException, ParseException, OutputLocationException, 
    CodeExportException, IOException {
        Asc asc = new Asc(astFilePath, outputLocationPath, frameworkName);
        
        sourceCodeFilePath = asc.run();
    }

    private Path runScma() 
    throws wniemiec.mobilang.scma.framework.exception.FactoryException, IOException {
        Scma scma = new Scma(sourceCodeFilePath, outputLocationPath, frameworkName);

        return scma.run();
    }
}
