# Zadajs
Zadajs is a simple Node package for server stuff and other things.

    // example
    const Zada = require("zadajs");
    /*
    HOW TO INSTALL ZADA:
    1. run npm init in folder you want to set up.
    2. type npm i zadajs
    3. it'll install from there. then use the code above to have a
    variable for Zada!
    */

	Zada.port =  3000;
	
	Zada.write("Hello");
	
	console.log(Zada.cColor.bggreen +  Zada.cColor.fgblue + "hihihihih"  +  Zada.cColor.reset);
	
Output:
It'll log this:
![Log](https://i.ibb.co/RbrZGGv/image.png)
and it'll show this on `localhost:3000` (or the port you set with `Zada.port`) in your browser:
![
](https://i.ibb.co/GpKt0BM/image.png)