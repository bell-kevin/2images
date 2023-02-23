# Two Images

In this project, you will practice displaying an image which is a local asset, then expand that learning to display an image from the Internet. You will add some props to the images to explore that component more. You will learn about Touchable components -- even though Pressable is now the best option, it is quite new and you will encounter Touchables in existing projects, so you should know about them. To see a response to a touch, you will also learn about the Alert component. this assignment will include a lot of instruction, please read through everything carefully.

In the tutorial, you learned about adding images stored as a local asset. You learned that a local asset is stored within the project, usually in the assets folder, often in an images folder within the assets folder.  It is also possible to get images from online URLs, which requires slightly different code.

To access a local asset, the code is:

   <Image source={require("./assets/photo.jpg"} />

If the image is online, you have to specify the location, and also the size of the image, because React Native doesn't know that size. There is a location for random images at "https://picsum.photosLinks to an external site.". It has a collection of images and one is chosen randomly as the image of the day. You can also specify a specific image in the library of their images, by specifying the ID for that image. For example, an image of red rock formations (perhaps taken in southern Utah) has an ID of 829, so the URI to retrieve that image is "https://picsum.photos/id/829". Another image in the picsum gallery of someone typing on a PC is image 5, so its URI is "https://picsum.photos/id/5". For the Image component in React Native, you must add the size you want for that image. If it should be 200 pixels high and 300 pixels wide, the complete URI for the image with the PC is "https://picsum.photos/id/5/200/300". Go to that website and check the images, finding one you like and noting its ID. You can't use the random choice for this assignment because you need to include a caption below the image.

To display that image in your React Native app, the code is:

   <Image
      source={{
         height: 200,
         width: 300,
         uri: "https://picsum.photos/id/5/300/300"
      }}
   />

In this project, you will place 2 images on a screen, one that is a local asset, and one from the picsum.photos website that is retrieved from the Internet.

Put the local asset first, which is this image of our college Download this image of our college. It is 625 x 400 pixels. You don't have to specify a size with local assets, because React Native can get that info. Check the React Native docs about the Image component to see the props available. There is a resizeMode prop that adjusts the image, with options like 'cover', 'contain', 'stretch', 'center', 'repeat'. Try these out to see the effects on the image. Choose one for the final version of the project.

Look at the Image prop "fadeDuration". While the image is loading to the screen, it fades in, for a duration of milliseconds. Experiment with this. Use a value of 1000 milliseconds (1 second) at least for the final version of the project.

Display the remote URL image below the local asset image. Use the picsum image you chose, and specify the size of 200 pixels high, 300 pixels wide at least. It can be larger or with height bigger than width, as long as it doesn't touch or extend beyond the edges of the screen. There must be visible background on all sides of this image.

The background color must be something other than white.

Both images need a text component as a caption below. 

Now that you have both types of images displaying on the screen, add the functionality to press an image and get a response. You will use TouchableOpacity and TouchableHighlight for this project. There are three Touchable options -- TouchableHighlight, TouchableWithoutFeedback, and TouchableOpacity. When the object is touched, pressed, tapped, these components provide a listener so that a response can occur. With TouchableHighlight, the effect is a darkening of the object. With TouchableOpacity, the effect is a lightening of the object. With TouchableWithoutFeedback, the effect is no visible change. Check the React Native documentation to find out more about the props available for the TouchableOpacity component (https://reactnative.dev/docs/touchableopacityLinks to an external site.) and the TouchableHighlight component (https://reactnative.dev/docs/touchablehighlightLinks to an external site.).

Use TouchableOpacity for one image, and TouchableHighlight for the other image.

With both of those components, you need to add the amount of opacity to use with the prop "activeOpacity"; experiment with the values to see what happens with different values. To see the effect, press and hold on the image. While the press is occurring, you will see the amount of opacity. With TouchableOpacity, note also the prop "underlayColor". You can specify a color that affects the opacity. Try an underlayColor of "red" and an activeOpacity value of 0.5 for the image with TouchableOpacity, press and hold to see the effect. You can choose whatever color you want for the underlayColor in the final version of the project. For the final version of the project, use an activeOpacity value of 0.5 for both images.

If an image is pressed, what should happen? The options are numerous, but here, we will simply create an alert. There is an Alert component in React Native (see the documentation) and an "alert" function from JavaScript. Use the "alert" function. To activate the reaction to the press, use the "onPress" prop; it works exactly the same in both TouchableOpacity and TouchableHighlight components. For example, if pressing on the school image, the onPress prop would be written like this:

   <TouchableOpacity 
      onPress={ () => alert("You clicked the school image") }
   >

Include an onPress prop with a simple alert like this for both images, which specifies which image was pressed. 

Add a stylesheet with style for the container (the full screen) that uses some color for the background color -- it cannot be white (it is "tan" in the example). You will add some text below each image, so add style for that text that adds some padding, to add space between images and text, make the fontSize a little larger, and make the fontWeight 'bold'.

Summary:

Display 2 images, one which is a local asset (school picture) and one which is a remote URI. The remote image must be sized so that it does not touch the edges of the screen. Add fade duration of at least 1 second to the local asset image. Use TouchableOpacity on one image, and TouchableHighlight on the other. Add opacity to each. Add an underlay color to the TouchableOpacity. Display text below each image that describes the image. Fire an alert when the images are pressed, which describes which button was pressed.

Take screenshots of the running project, and both alerts.

Submission: Zip together the root folder and the 4 screenshots, and submit the single zipped folder.
https://reactnative.dev/docs/environment-setup

![p]()

![p]()

![p]()

![p]()

## Storing Projects 

When you complete a React Native project, you should keep it on your storage device for a little while. There are multiple instances where one project will be the basis of another project. The Udemy course keeps building on the projects, so you definitely need to keep those around until you are done with that project in the course.

BUT -- React Native projects are huge. There is a folder, node_modules, that takes up most of the space. If you keep every project you create in this course, you would need at least 20GB of space, probably more. How can you manage this terrible drain on your storage?

That node_modules folder is automatically added when you create a new project. Once you are done with the project, you can delete that folder, node_modules, and the size of your project will shrink dramatically.

This does not destroy the project. If you find you need to run an old project again, which no longer has its node_modules folder, open it in Visual Studio Code, open a terminal, and type "npm install". This will load the node_modules folder again, and the project is whole and ready to run.

Note that when you delete that folder, it takes a noticeable amount of time, far more than it takes to reload it.

A good practice for course maintenance is to keep the project in its full state until you are sure you won't be using it in the next few days, then delete the node_modules folder.

== We're Using GitHub Under Protest ==

This project is currently hosted on GitHub.  This is not ideal; GitHub is a
proprietary, trade-secret system that is not Free and Open Souce Software
(FOSS).  We are deeply concerned about using a proprietary system like GitHub
to develop our FOSS project. I have a [website](https://bellKevin.me) where the
project contributors are actively discussing how we can move away from GitHub
in the long term.  We urge you to read about the [Give up GitHub](https://GiveUpGitHub.org) campaign 
from [the Software Freedom Conservancy](https://sfconservancy.org) to understand some of the reasons why GitHub is not 
a good place to host FOSS projects.

If you are a contributor who personally has already quit using GitHub, please
email me at **bellKevin@pm.me** for how to send us contributions without
using GitHub directly.

Any use of this project's code by GitHub Copilot, past or present, is done
without our permission.  We do not consent to GitHub's use of this project's
code in Copilot.

![Logo of the GiveUpGitHub campaign](https://sfconservancy.org/img/GiveUpGitHub.png)
