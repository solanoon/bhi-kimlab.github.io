---
layout: page
title: Contact
permalink: /contact/
---
<article class="content">
<div style="width: 100%">
  <!--<iframe width="100%" height="400" src="http://www.citymaps.ie/create-google-map/map.php?width=100%&amp;height=400&amp;hl=en&amp;q=Seoul%20National%20University%201%20Gwanak-ro%2C%20Gwanak-gu%20Seoul%2008826%2C%20Republic%20of%20Korea+(Student%20Room%20(301))&amp;ie=UTF8&amp;t=&amp;z=15&amp;iwloc=A&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"><a href="http://www.mapsdirections.info/medir-distancia-area.html">Calculadora de distancias google</a> en <a href="http://www.mapsdirections.info/">Calcular Ruta España</a></iframe>-->
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d559.8223682165718!2d126.95350830506213!3d37.46465193443272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca3296025cc5b%3A0xb74c25b76a4ec3c0!2z7ISc7Jq464yA7ZWZ6rWQIOuztOqxtOuMgO2VmeybkA!5e0!3m2!1sko!2skr!4v1486529137279" width="100%" height="450" frameborder="0" style="border:0" allowfullscreen></iframe>
</div><br />


<h3>Address</h3>
301-516, Seoul National University, 1 Gwanak-ro, Gwanak-gu, Seoul 08826, Republic of Korea
<ul>
  <li>Student Room (301): 301동 516호</li>
  <li>Student Room (220-1): 220동 653호</li>
  <li>Student Room (220-2): 220동 651호</li>
  <li>Office Room: 220동 641</li>
</ul>
<hr />


<h3>Line</h3>
<ul>
  <li>Office Room: 02-880-2859</li>
</ul>
<hr />


<h3>Professor Contact</h3>
{% assign profs=site.members | where: "type","prof" %}
{% assign prof=profs.first %}
<h4>{{ prof.title }} </h4>
<p>{{ prof.contact }} </p>
<a href="{{ site.baseurl }}/members/sun_kim.html">Click here</a> to see more information of professor.
</article>
