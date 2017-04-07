# Computer Build Assignment

You just picked up a contract from someone who owns a blog about computers. The owner has a webpage and some code ready but they need someone to do a little research on a particular computer build and write some code.

## Download
All the required files are located in this repository. Copy these files to your c9.io development environment.

1. In your c9 terminal type `$ git clone https://github.com/STL-ICS2O/computer-build.git`
- Go to the extracted folder `$ cd computer-build/` and modify the code!

## Instructions
### Research
1. Think of what type of build this will be. 
  - University Student
  - Gaming
  - Business
  - Professional (e.g., Video editing, music recording)
- You are to find the appropriate components for your build. The following are mandatory:
  - CPU
  - Motherboard
  - RAM
  - Video Card
  - Storage
  - Monitor
  - Case
  - Power Supply
  - Operating system
  - Keyboard/Mouse
- Any other components, peripherals, or software that would be required for your build.
- Each part must include the following information:
  - Make (The manufacturer, the company who builds the part)
  - Model (What does the company call this component)
  - Image of the part
  - Price
  - Description of the part and, in your own words explain:
    - the specifications/features,
    - why you chose this particular make/model over others.
    - The compatibility between the CPU, Motherboard, and RAM, explain how you know that they are compatible with each other.
    CPU - Motherboard (intel or AMD)
    RAM - Motherboard (# of pins)
- You have a $1100 budget (before tax)
  - Use http://ca.pcpartpicker.com/  
  - Do not copy a pre-existing build.The blogger will not be happy with you.

### Coding
1. They have given you the opportunity to put your name on this page and call the build whatever you like. Edit the appropriate places in the <code>index.html</code> file.
- Within the <code>sketch.js</code> file, you are to create [object literals](https://www.khanacademy.org/computing/computer-programming/programming/objects/p/intro-to-objects "Kahn Academy - Intro to Objects") for each component following the examples given.
- Each object literal must be included in the [array](https://www.khanacademy.org/computing/computer-programming/programming/arrays/p/intro-to-arrays "Kahn Academy - Arrays") called <code>components</code>.
- The rest of the code in the <code>sketch.js</code> file doesn't need to be modified. It is essentially a for-loop that will cycle through our array of components, and for each component, it will add the component's information to our website automatically.
