(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{368:function(t,a,e){"use strict";e.r(a);var s=e(34),n=Object(s.a)({},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"uninstall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#uninstall","aria-hidden":"true"}},[t._v("#")]),t._v(" Uninstall")]),t._v(" "),e("h4",{attrs:{id:"how-to-stop-imunify360"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-stop-imunify360","aria-hidden":"true"}},[t._v("#")]),t._v(" How to stop Imunify360")]),t._v(" "),e("p",[t._v("For CentOS6/CloudLinux6, run the following command:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("service imunify360 stop\n")])])])]),t._v(" "),e("p",[t._v("For all other operating systems, run the following command:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("systemctl stop imunify360\n")])])])]),t._v(" "),e("h4",{attrs:{id:"how-to-uninstall-imunify360"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-uninstall-imunify360","aria-hidden":"true"}},[t._v("#")]),t._v(" How to uninstall Imunify360")]),t._v(" "),e("p",[t._v("To uninstall Imunify360, run:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("bash i360deploy.sh --uninstall\n")])])])]),t._v(" "),e("p",[t._v("If you have already deleted "),e("span",{staticClass:"notranslate"},[e("code",[t._v("i360deploy.sh")])]),t._v(" then download it by running:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("wget https://repo.imunify360.cloudlinux.com/defence360/i360deploy.sh\n")])])])]),t._v(" "),e("p",[t._v("and proceed to the directory with the script.")]),t._v(" "),e("p",[t._v("For CloudLinux OS, please run the following commands:")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/usr/sbin/cagefsctl  --force-update\n/usr/sbin/cagefsctl  --remount-all\n")])])])]),t._v(" "),e("p",[t._v("to remount "),e("span",{staticClass:"notranslate"},[t._v("CageFS")]),t._v(" and remove files from user's local directories as after uninstalling these files are not removed automatically and can generate errors to Apache log.")]),t._v(" "),e("p",[t._v("See also: "),e("a",{attrs:{href:"https://cloudlinux.zendesk.com/hc/en-us/articles/360016144139-Imunify360-AV-uninstallation-FAQ",target:"_blank",rel:"noopener noreferrer"}},[t._v("Imunify360/AV uninstallation FAQ"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h4",{attrs:{id:"how-to-disable-updates"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#how-to-disable-updates","aria-hidden":"true"}},[t._v("#")]),t._v(" How to disable updates")]),t._v(" "),e("p",[t._v("Starting from Imunify360 v.4.10, if you need to disable Imunify360 then you need to disable updates as well by editing cron file and comment out the update command.")]),t._v(" "),e("p",[t._v("CloudLinux OS/CentOS")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/etc/cron.daily/imunify360.cron\n")])])])]),t._v(" "),e("p",[t._v("Ubuntu")]),t._v(" "),e("div",{staticClass:"notranslate"},[e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[t._v("/etc/cron.daily/imunify360-firewall\n")])])])])])},[],!1,null,null,null);a.default=n.exports}}]);