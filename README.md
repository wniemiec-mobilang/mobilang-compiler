<p align="center">
    <img src="https://raw.githubusercontent.com/wniemiec-mobilex/mobilex-compiler/master/docs/images/logo/logo.png?raw=true" alt="Logo">
</p>

<h1 align='center'>Mobilex compiler</h1>
<p align='center'>Mobilang to Mobile Application compiler</p>
<p align="center">
	<a href="https://github.com/wniemiec-mobilex/mobilex-compiler/actions/workflows/ubuntu.yml"><img src="https://github.com/wniemiec-mobilex/mobilex-compiler/actions/workflows/ubuntu.yml/badge.svg" alt=""></a>
	<a href="http://java.oracle.com"><img src="https://img.shields.io/badge/java-11+-D0008F.svg" alt="Java compatibility"></a>
	<a href="https://github.com/wniemiec-mobilex/mobilex-compiler/releases"><img src="https://img.shields.io/github/v/release/wniemiec-mobilex/mobilex-compiler" alt="Release"></a>
	<a href="https://github.com/wniemiec-mobilex/mobilex-compiler/blob/master/LICENSE"><img src="https://img.shields.io/github/license/wniemiec-mobilex/mobilex-compiler" alt="License"></a>
</p>

<hr>

## ❇ Introduction
The Mobilex compiler is the main component of the framework. It was built with Java and is composed of two parts, the first being framework-independent, and the second framework-dependent. The first part of the process is composed of the [MAST compiler](https://github.com/wniemiec-mobilex/mast-compiler), which is responsible for generating the AST from the Mobilang file. The second part of the Mobilex compiler structure is formed by the [AMA compiler](https://github.com/wniemiec-mobilex/ama-compiler). This compiler receives the previously generated AST as input and generates mobile applications according to what is specified in the AST. For that, this compiler calls a third-party mobile development framework.

## ❓ How to use

```
Coming soon
```

### Example

```
Coming soon
```

## ✔ Requirements
- [Java](http://java.oracle.com/)
   
## 🚩 Changelog
Details about each version are documented in the [releases section](https://github.com/wniemiec-mobilex/mobilex-compiler/releases).

## 🗺 Project structure
![architecture](https://raw.githubusercontent.com/wniemiec-mobilex/mobilex-compiler/master/docs/images/design/architecture.jpg)
