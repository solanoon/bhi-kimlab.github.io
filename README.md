## BHI Lab Theme

This is a simple personal material theme, best suited for Labortary.

Edited by @lazykuna, Original skin: HCZ Material theme

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
* Add your own nice lab pics! Grayscale image is suggested for heterogenity.

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
  - `author` : your own signature(name), and BE CAREFUL - THIS LINKS TO YOUR JOURNAL LIST, so try not to make name duplicated.

### News
* Create file at `_posts` directory.
  - file name must be `(year)-(month)-(day)-(name).md`
