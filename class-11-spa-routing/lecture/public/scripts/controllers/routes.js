'use strict';

page('/', homeView.init)
page('/about', aboutView.init)
page('/contact', contactView.init)
page('/contact/:id', contactView.search)
page()
