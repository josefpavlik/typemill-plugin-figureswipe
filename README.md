# figureSwipe plugin for typemill

The plugin allows you to zoom in the figures in the page and show then one after other like photo gallery.
The text from the attribute **alt** of the figure is shown below or aside the picture.

### A page of typemill documentation
![doc/screenshot1.png](doc/screenshot1.png)
The first image is large, so it's zoomed out, it's not possible to read the text on

### Clicking on the figure, it zoom in and show it on full page of browser
![doc/screenshot2.png](doc/screenshot2.png)
If the resolution of the image is larger than the window of browser, the second click zooms it to full resolution and it's possible to pan the image.

### Navigating on left or right arrow you can show another figures of the page
![doc/screenshot3.png](doc/screenshot3.png)



## Installation
clone this repository to your plugins directory of typemill

```
cd <path_to_typemill>/plugins
git clone https://github.com/josefpavlik/typemill-plugin-figureswipe.git figureSwipe
cd figureSwipe
./prepare_libs
```
Activate plugin in typemill and enjoy it



