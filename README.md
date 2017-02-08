## BHI Lab Theme

This is a simple personal material theme, best suited for Labortary.

Edited by Dongwon Kang, Original skin: HCZ Material theme

### Demo
* [http://biohealth.snu.ac.kr/](BHI Lab)
* Original: [http://aboutashu.com/hcz-jekyll-blog](http://aboutashu.com/hcz-jekyll-blog/)

#### Feature

* Sitemap and XML Feed
* Projects
* Paginations in homepage
* Post(News)s under category
* Members page
* Slick-style index page

#### Screenshot

![Screenshot Home Page](https://raw.githubusercontent.com/ashutosh2k12/jekyllthemes/master/thumbnails/hcz-material.png  "Screenshot Home Page")

## How to edit contents

### Main page (random pics)
* Edit `_data/home.json` and add proper image file in `static/img/home`
* Add your own nice lab pics! Grayscale image is suggested for unity.

### Member page
* Edit `_member/(own name).md` to express your own current position, interest, or something else.
  - `title` : Your own name
  - `type` : Only ms/phd/msphd/assistant allowed.
  - `contact` : Your own email or phone.
  - `tag` : Proper tag shows your written journals.
  - You can write your interest or something else at the end of the file.
* Pictures should be uploaded at `static/img/member`.
* You can make your own file(page) if not exists.

### Papers
* Edit `_data/publications.json`
* Contains 4 types: international / conference / domestic / book
  - `title` : title to be displayed
  - `year` : written year
  - `author` : your own signature(name), and *THIS LINKS TO YOUR JOURNAL LIST*, so try not to make name duplicated.

### News
* Create file at `_posts` directory.
  - file name must be `(year)-(month)-(day)-(name).md`

## Using Git

* First, clone files from repository (of course, you should have git account)
```
git clone "https://github.com/bhi-kimlab/bhi-kimlab.github.io"
```

* After doing proper editing, push modifications like this:
```
git commit -am "(enter summary about what you edited)"
git push origin master
```
  You can check your modification at [here](http://bhi-kimlab.github.io)

* After your modification end, merge it into master branch. then biohealth server will automatically reflect your editing.

* I suggest modifying in another branch, not directly pushing directly in `master` branch.
