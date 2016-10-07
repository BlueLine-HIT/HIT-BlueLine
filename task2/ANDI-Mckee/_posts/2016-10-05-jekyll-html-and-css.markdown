---
layout: post-layout
title:  "Jekyll, HTML, and CSS"
date:   2016-10-05 14:13:00 +0800
categories: html css
---
Finally, all bugs were eliminated !!! Jesus !!! How can I make it ? 

Now that the blog has been basically set up, I've got time to share how terrible these three days were. Haha, but I bet experience I got during days of suffering is absolutely more to say.

Thus, I'll share my understanding, problems and their solutions with you. I hope that may be helpful. Let's begin.

# 1.  About Jekyll

### First of all, what is Jekyll ? 

>> *[**Jekyll**][1] is a simple, blog-aware, static site generator. It takes a template directory containing raw text files in various formats, runs it through a converter and our Liquid renderer, and spits out a complete, ready-to-publish static website suitable for serving with your favorite web server.*

As described above, Jekyll is a website generator which turns text and other files into a static web page.This engine is powerful and makes things easier.For purpose with low demand, such as A BLOG, we can use Jekyll. If so, not only do we have a easier way to write a blog post, but also there is no need to care about back-end.------**" Cuz there is no database and other logical processes at all !!! "**

### Amazing, but, how could ? 
Jekyll uses three different modules to implement the conversion:

* [**YAML**][2] -- a human-readable data serialization language (like JASON).
* [**Liquid**][3] -- a template language used to load dynamic content for front-end.
* [**Markdown**][4] (or Textile) -- a human-friendly tool for more readable markup language (Remember, this tool uses its own grammar to convert your codes into html partials while it is *NOT* a markup language).

Since these modules are assembled, Jekyll can present its magic. However, if you are attentive enough, you might find the magic could only be performed on small scale website, even except a blog that has a reply function.

YAML is for definition of files' meta-information (which is called **front matter**). Markdown is for you to write a more readable .md file to be converted into a html. It is often used for blog writing. Liquid is to add matters into files, which is more like a programming language with logical and control flow. These tools are easy to learn and supposed to be learned before using Jekyll of course.

With these tool, Jekyll converts your .md file or plain html with new thing added into a complete html. And it does this to css files too. Then it will link url to these finished products.

For example, before conversion, my first post on my blog is like this:

{% highlight html linenos %}
---
layout: post-layout
title:  "My first post with jekyll"
date:   2016-09-30 08:06:54 +0800
categories: website
---
This is my first blog on web development.

And it is REALLY the first time that I have EVER tried jekyll.

To be honest, the documentation of jekyll is just like SHIT. At first, I supposed it my weakness in English which made me confused for a long time. However, after I switched the doc page into a Chinese one, I can hardly understand how to go through EITHER!!!  

Now I am still working on how to make it...

Hope you guys follow me on [github](https://github.com/ANDI-Mckee "ANDI-Mckee's Github").
{% endhighlight %}

Plain enough, right ? Just like this, every time you request a page, Jekyll will generate html and css files every time you requested. Imagine this, if you were able to make money out of thin air, would you need bank ? Yes, Jekyll doesn't need database.

On the contrary to convenience, the performance of Jekyll website is going to be lower than a normal website with identical scale. The more files the server has, the lower it will be. Because it traverses **all files** every time you request.

However, there are more fun matters on Jekyll waiting you and me to explore... I'll update my blog as soon as I get more knowledge about it.

# 2.  Some Terrible Things about HTML

I don't know it is the restriction of my poor low ability of HTML that matters, or the truth that this markup language is really terrible. During developing website, I always encounter problems failed to be explained with existing knowledge of what I've got. I don't know whether it has a number of details not mentioned in w3schools' tutorial. Whatever, I am going to look into its documentation and wish to have a huge change on my opinion.

Then, before I become a guru of HTML, I will post problems needed attention and valuable. There are several today:

### How a \<img\> tag align ?

Maybe you don't know. That's because you never knock into it. When you put a \<div\> tag or others besides a image, you will see the problem. You are likely to see they are not aligned.

It is due to the mechanism img align ------ it aligns to *the bottom of text in adjacent tags* by default. You should put this into \<img\> tag's style to make it aligned to the top:


{% highlight css linenos %}
img {
    vertical-align: top;
}
{% endhighlight %}

### Excess space between inline-block elements ?

If you find inline-block element cannot butt up... Just like these:

<div style="display: inline-block;background-color: red;width: 50px;text-align: center;">div_1</div>
<div style="display: inline-block;background-color: red;width: 50px;text-align: center;">div_2</div>
<div style="display: inline-block;background-color: red;width: 50px;text-align: center;">div_3</div>

Don't worry. There are two ways I've learned.

1. Switch into your html file,and then remove extra space between these tags.

2. Use negative margins...
{% highlight css linenos %}
div {
    margin-right: -4px;
}
{% endhighlight %}

And if you are blessed you'll get:

<div style="display: inline-block;background-color: red;width: 50px;text-align: center;margin-right: -4px;">div_1</div><div style="display: inline-block;background-color: red;width: 50px;text-align: center;margin-right: -5px;">div_2</div><div style="display: inline-block;background-color: red;width: 50px;text-align: center;">div_3</div>

At this moment, take a deep breath. Don't be too mad and speak aloud : " Fuck HTML SHIT !!!!! "

### Let long words wrap

If a word is tooooooooooooooooooooooooo long, it is not wrapped but overflows by default. The code snippet below works:

{% highlight css linenos %}
#container {
    word-wrap: break-word;
    overflow-wrap: break-word;
}
{% endhighlight %}

# 3.  A layout and its implementation in pure CSS

Now go back to homepage of my website, the layout you've seen is called *waterfall layout* or *Pinterest like layout*, etc. Tags are just like water flowing from top to bottom. This layout can be implemented PURELY by CSS ! An example:

### HTML file:
{% highlight html linenos %}
<ul class="container">
  <li class="item"></li>
  <li class="item"></li>
  <li class="item"></li>
  ...
  <li class="item"></li>
</ul>
{% endhighlight %}

### CSS file:

{% highlight css linenos %}
.container {
    margin: 0 auto;
    padding: 0;
    width: 400px;
    column-count: 2;
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-gap: 0;
    -moz-column-gap: 0;
    -webkit-column-gap: 0;
}

.item {
    text-decoration: none;
}
{% endhighlight %}

The column property is the main point. However, it has some disadvantages:

* Work only on tags with known number.

* Each item is places from top to bottom in a column first, then from left to right.
But if you just want to present some photos, it should be a decent idea.
For more complex structure, I recommend you to use a JQuery plugin:

> [**Masonry**][5]

<br>
<br>
<hr>

<br>
<br>
<p style="text-align: center;">OK, that's enough today. I'll update soon with bags of bugs.</p>


[1]: https://jekyllrb.com/ "More information about Jekyll"
[2]: http://yaml.org/ "More information about YAML"
[3]: https://shopify.github.io/liquid/ "More information about Liquid"
[4]: https://daringfireball.net/projects/markdown/ "More information about Markdown"
[5]: http://masonry.desandro.com "Get the plugin"