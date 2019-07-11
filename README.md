# Circular Profile Picture Generator
<img src="example.gif" width="50%">

This React-based app does the following:
1. Opens the webcam and ...
2. captures images using `getUserMedia()` (using https://github.com/mozmorris/react-webcam)
3. Crop the taken image with a circle border (using http://foliotek.github.io/Croppie/)
4. Save the result with a given name (prompt) (using https://www.npmjs.com/package/downloadjs)
