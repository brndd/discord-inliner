# discord-inliner

Does it ANNOY you when someone links you to a MP4 video on the Discord CDN and instead of showing you the video it prompts a download box? Well, it ANNOYS me!!

This happens because Discord sets the Content-Disposition header to "attachment", which suggests to the browser that the file should be downloaded rather than shown inline. Why Discord does this is unclear, but I suspect it's because they want to discourage people from using their CDNs for hotlinking onto other platforms. Or maybe it's some misguided attempt at convenience. I don't know.

Anyway, this addon overwrites the Content-Disposition header to "inline", which suggests to the browser that it should display the content inline. This means you don't have to download the video (or whatever it is you're looking at) to view it. If you *do* want to download it, your browser has a feature for that: Ctrl-S or File > Save Page As. Have fun!

# Installation

Download the add-on from the releases page and Firefox should prompt you to install it. If it doesn't, save the file to your computer and then go to Add-ons Manager > click on the little cogwheel near the top > Install Add-on from File.

You do use Firefox, right? 

# Chrome support

Google no longer supports the `webRequest` API, because it's the API that adblockers use to block ads and Google hates adblockers. This addon therefore will not work on Chrome. I seriously hope you don't use Chrome, lmao!!
