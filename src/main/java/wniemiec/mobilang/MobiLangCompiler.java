package wniemiec.mobilang;

import java.nio.file.Path;

import wniemiec.mobilang.asc.Asc;
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
    public Path run() {
        runMast();
        runAsc();
        
        return runScma();
    }

    private void runMast() {
        Mast mast = new Mast(mobilangFilePath, outputLocationPath);
        
        astFilePath = mast.run();
    }

    private void runAsc() {
        Asc asc = new Asc(astFilePath, outputLocationPath, frameworkName);
        
        sourceCodeFilePath = asc.run();
    }

    private Path runScma() {
        Scma scma = new Scma(sourceCodeFilePath, frameworkName);

        return scma.run();
    }
}
