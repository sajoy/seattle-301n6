'use strict';

page('/', homeController.init, scottController.init, danController.init);
page('/contact', contactController.init);
page('/contact/:banana', contactController.init);
page('*', homeController.error);
page();
