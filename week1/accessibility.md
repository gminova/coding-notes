 # Accessibility
 > There are certain things that people with disabilities simply cannot do for themselves. But, if they can use a computer connected to the world via the Internet, they have a high degree of independence. They can read the news, research areas of interest, purchase supplies, and access the world... as long as the sites that they want to access are designed to permit disability access. - _[WebAIM](https://webaim.org/articles/motor/)_
 ## Different Perspectives:

**1. No audio? - Add captions!** People who are deaf might find it frustrating to guess what a video is all about. Captions make videos accessible. Which is also handy for thos who want to watch a video in loud environments or where they need to be very quiet.

**2. Colour blind/insensitive? - Use contrasting colours!** Colours with poor contrast make navigation, reading and interaction very difficult. Good design means sufficient colour between foreground and background. Not just text and images, but links, icons, and buttons. Good contrast ratios are also useful in different lighting conditions.

**3. Voice recognition** Sometimes, it's just easier to speak. Many people with a physical disability rely on voice recognition to use the computer. Voice recognition could help lots of other people with temporary limitations too, like an injured arm. It can aso prevent injuries becoming worse (RSI: Repetitive Stress Injury).

**4. Text to speech.** Some people with visual impairment and cannot read the text off a screen. Fortunately, computers can convert text to speech. The blind, people with dyslexia, those having difficulty reading text, and people who like to multi-task can all benefit from this technology.

**5. Clear layout and design.** Poor layout can be very fustrating and leads to poor user experience. Clear headings, navigation bars, and consistent styling all contribute to a good layout and design. Complex designs can make finding information very difficult and even impossible for those with visual or learning disabilities.

**6. Notifications and feedback.** Without clear notifications and feedback, people can become confused, expecially if error messages are complex or ambiguous. Making feedback user-friendly will improve the user experience.

**7. Large links, buttons and controls.** Areas for clicking/tapping should be easy to use. This is crucial for people with reduced dexterity.

**8. Customizable text.** Being able to adjust the text size is crucial for those with low vision or dyslexia. Well coded websites should allow for customization of font, size, spacing, and colour without loss of functionality or  clarity.

**9. Understandable content.** Structuring your content well will prevent users getting lost. Use of headings, lists and separations improves content structure. User-friendly, clear, unambiguous, jargon-free language is crucial for everyone, especially people with cognitive or learning difficulties.

**10. Keyboard compatibility.** Some people can only rely on their keyboard to navigate on a website for various reasons. Keyboard compatibility can offer an inclusive experience for all.

## Some statistics

According to the [World Health Organisation](http://www.who.int/mediacentre/factsheets/fs282/en/):

> About 90% of people with the disabilities (...) live in the developing world.

Even if we hear about the number of people who experience these disabilities, developers often mistakenly believe that these people aren't within their own userbase.

> 285 million people are visually impaired worldwide.

That's nearly 4 times the population size of the UK and Israel combined

> 39 million of these are [blind](http://webaim.org/articles/visual/blind)

>   + 82% of blind people are over 50 years old

This age group constitutes 20% of the world, and many developing countries have an aging population

> 246 million have [low vision](http://webaim.org/articles/visual/lowvision)

> 360 million suffer from [hearing loss](http://webaim.org/articles/auditory/)

## Exercises
Think about your own website. Have you written it under the assumption that your users will be accessing your content with a mouse? Have you been relying on colour to convey meaning? Did you think about captions or transcripts for your audio content?

**Pair up with someone new, preferably someone whose website you haven't seen before.**

Open up your neighbour's website.

1. Try accessing every piece of content on the site using only your keyboard.

2. Download the [HTML 5 outliner](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo?hl=en) chrome extension. Then go back to the website and click on the new icon in your toolbar.
  + Is the content semantic?
  + Screen reader users navigate the page based on the order of the elements in the DOM. Does the order look sensible?

3. Put in your earphones. Then download the [ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) chrome extension. Don't go back to your neighbour's website yet!
  + Go to [www.gov.uk](https://www.gov.uk/) and try navigating around, using only your keyboard until you feel comfortable with the functionality of ChromeVox. To learn the necessary keyboard shortcuts, find ChromVox in your extensions and click on "Options".
  + Click on the tab/window that contains your neighbour's website.
  + Close your eyes! Then try navigating the site using only ChromeVox to help you. Can you get to all the content?  

  _Note: You can disable the voice by clicking `Ctrl`, or disable ChromeVox altogether with `ctrl`+`alt`+`z` (or going to Settings -> Extensions, find ChromeVox and tick the "disable" checkbox)._

4. Try this again with someone else's website.

5. Install [Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en)  
  + Run an audit on your neighbour's website:  
    1. Open dev tools (as normal)  
    2. Click on the new "Audits" tab
    3. Click Perform an audit

    4. Check the "Accessibility" box
    5. Click Run audit

  + Use the clickable links to find out what the problems are and what can be done about them, and view failing elements to know where there problems are in the code.
  + Raise an issue on your neighbour's website for each newly discovered problem

6. Head to your own website, have a look at the issues, and start fixing bugs!

## Tools that can help
Bear in mind this advice from Government Digital Services (GDS):
> You must not solely rely on using automated tools to check accessibility - they can only find 20% to 30% of issues.

and from WebAIM:
> No automated evaluation tool can tell you if your site is accessible, or even compliant. Human testing is always necessary because accessibility is about the human experience.

So be savvy when you use the following tools. They are no substitute for learning your craft. But using a variety of tools to test different aspects can at least help you while you're learning:

### HTML checkers
[HTML validator](https://validator.w3.org/nu/) (website) - fairly comprehensive  
[HTML Code Sniffer](http://squizlabs.github.io/HTML_CodeSniffer/) (website)

### All in one - [see a summary of what these tools check for](#what-these-tools-check-for)
[Tenon.io](https://tenon.io/) (website) - nice visual representations, and fairly thorough  
[Wave - the chrome extension](https://chrome.google.com/webstore/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh/related) - not as visually appealing, but does contain more thorough description that is directly related to W3C's advice, with links
[Wave - the website, in case you don't want to download yet another extension](http://wave.webaim.org/)  
[Tota11y](https://chrome.google.com/webstore/detail/tota11y-chrome-extension/jbhkjcigeionejpngkcdccblocdnjini?hl=en) (chrome extension) developed by Khan Academy  
[a11y](https://addyosmani.com/a11y/) (command line tools) - especially useful once you're writing backend code and running scripts using your command line, you never have to leave the terminal

### The ones you will have downloaded during the workshop  
[Accessibility Developer Tools](https://chrome.google.com/webstore/detail/accessibility-developer-t/fpkknkljclfencbdbgkenhalefipecmb?hl=en) (chrome extension) - sits inside your dev tools rather than the toolbar, so easy to switch between the accessibility audits and changing your code  
[HTML 5 outliner](https://chrome.google.com/webstore/detail/html5-outliner/afoibpobokebhgfnknfndkgemglggomo?hl=en) (chrome extension) - nothing fancy, just a quick visual check of your DOM ordering & semantics  
[ChromeVox](https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn?hl=en) (chrome extension) - it's good to remind yourself what it's like once in a while, a nice interactive way of seeing if your code does what you want it to  

#### What these tools check for
There are many things that these tools don't cover. Generally, they're looking at a high-level overview of the things you should be considering:
+ Provide appropriate alternative text
+ Provide appropriate document structure
+ Provide headers for data tables
+ Ensure users can complete and submit all forms
+ Ensure links make sense out of context
+ Caption and/or provide transcripts for media
+ Ensure accessibility of non-HTML content, including PDF files, Microsoft Word documents, PowerPoint presentations and Adobe Flash content
+ Allow users to skip repetitive elements on the page
+ Do not rely on color alone to convey meaning
+ Make sure content is clearly written and easy to read
+ Make JavaScript accessible e.g. your page does not rely on JavaScript to function & event handlers are device independent
+ Design to HTML5 & CSS3 standards i.e. separate content from presentation