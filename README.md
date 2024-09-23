# Nameless RPG
# Quick Proof of Concept
# All handpainted and drawn art + text-adventure type interface
![Castle on an Island in the Sea](/public/images/scotland1.webp)

1. Demo to test gameplay and feasibility
   1. Show images and some text.
   2. Provide input box.
   3. Computer responds
   4. SCENE: Lay out object/data type + connect to image
   5. ACTIONS: What you can do
   
# Dev log

1. Set up Vite for project, clean up default, and set up github project. 
2. Add Tailwind early! https://tailwindcss.com/docs/guides/vite
3. Make one main container that is the screen height and width to hold all game assets and interface.
4. Test making a class in a util/game logic js file, and seeing if it can store state without having to setup Redux.
   1. When instantiating a class object in React, just set it to useState without a setter!
   2. Test creating a button to cause the character to lose 1 Hit Point.
5. NEXT UP:
   1. Start with Splash Screen
   2. Go to gameplay