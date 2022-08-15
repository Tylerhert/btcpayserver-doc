(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{831:function(e,t,a){"use strict";a.r(t);var s=a(35),r=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"backup-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#backup-restore"}},[e._v("#")]),e._v(" Backup & Restore")]),e._v(" "),a("p",[e._v("This guide gets you up to speed with the "),a("RouterLink",{attrs:{to:"/Docker/"}},[e._v("Docker deployment")]),e._v("'s Backup & Restore process.\nYou will learn about what to keep in mind when doing a backup and how to restore a backup.")],1),e._v(" "),a("p"),a("div",{staticClass:"table-of-contents"},[a("ul",[a("li",[a("a",{attrs:{href:"#remarks-and-considerations"}},[e._v("Remarks and Considerations")]),a("ul",[a("li",[a("a",{attrs:{href:"#lightning-channel-backup"}},[e._v("Lightning channel backup")])])])]),a("li",[a("a",{attrs:{href:"#how-does-the-backup-work"}},[e._v("How does the backup work?")]),a("ul",[a("li",[a("a",{attrs:{href:"#set-a-backup-passphrase"}},[e._v("Set a backup passphrase")])]),a("li",[a("a",{attrs:{href:"#automation-by-crontab"}},[e._v("Automation by crontab")])])])]),a("li",[a("a",{attrs:{href:"#how-to-restore"}},[e._v("How to restore?")])])])]),a("p"),e._v(" "),a("h2",{attrs:{id:"remarks-and-considerations"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#remarks-and-considerations"}},[e._v("#")]),e._v(" Remarks and Considerations")]),e._v(" "),a("p",[e._v("The original backups strategy in BTCPay Server still exists and can be found "),a("RouterLink",{attrs:{to:"/Docker/#how-can-i-back-up-my-btcpay-server"}},[e._v("here")]),e._v(".\nWhile this documentation covers the "),a("a",{attrs:{href:"https://github.com/btcpayserver/btcpayserver-docker/pull/641",target:"_blank",rel:"noopener noreferrer"}},[e._v("new process"),a("OutboundLink")],1),e._v(", the old "),a("code",[e._v("backup.sh")]),e._v(" script still works.")],1),e._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),a("p",[e._v("BTCPay Server is and will never be responsible for your backup.\nPlease make sure the backup includes the files and data you want to store.\nAlso, test the restore process before starting to rely on it.")])]),e._v(" "),a("h3",{attrs:{id:"lightning-channel-backup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#lightning-channel-backup"}},[e._v("#")]),e._v(" Lightning channel backup")]),e._v(" "),a("p",[e._v("Please be aware of this important issue:\nOld Lightning channel state is toxic!\nYou can lose all your funds if you close a channel based on an outdated state — and the state changes often!\nIf you publish an old state (say from yesterday's backup), you will most likely lose all your funds in the channel because the counterparty might publish a "),a("a",{attrs:{href:"https://www.d11n.net/lightning-network-payment-channel-lifecycle.html#what-happens-in-case-of-a-false-close%3F",target:"_blank",rel:"noopener noreferrer"}},[e._v("revocation transaction"),a("OutboundLink")],1),e._v("!")]),e._v(" "),a("p",[e._v("There is a high chance of failure in a disaster recovery scenario, where you may do a backup once per night and need to restore that one backup.")]),e._v(" "),a("p",[e._v("The Lightning channel backup from the "),a("code",[e._v("btcpay-backup.sh")]),e._v(" script will be sufficient in a migration case, where the shutdown of the old server happens cleanly.\nThe old server should not be started after the restoration and start of the new server.")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("The Lightning static channel backup should be watched by a script and copied over to a remote server to ensure you always have the latest state available.\nWe will provide such a script with a future update.\nFor now, keep the above in mind when restoring from the backup!")])]),e._v(" "),a("h2",{attrs:{id:"how-does-the-backup-work"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-does-the-backup-work"}},[e._v("#")]),e._v(" How does the backup work?")]),e._v(" "),a("p",[e._v("The backup process is run with the "),a("code",[e._v("btcpay-backup.sh")]),e._v(" script.")]),e._v(" "),a("p",[e._v("Log in to your server, switch to the "),a("code",[e._v("root")]),e._v(" user and type the following:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The backup script needs to be run as the root user")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# As the other scripts, it is inside the BTCPay base directory")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_BASE_DIRECTORY")]),e._v("\n./btcpay-backup.sh\n")])])]),a("p",[e._v("The backup process needs to be run as "),a("code",[e._v("root")]),e._v(".\nIt will check for and let you know if you have to switch users.")]),e._v(" "),a("p",[e._v("The script will do the following steps:")]),e._v(" "),a("ul",[a("li",[e._v("Ensure the database container is running")]),e._v(" "),a("li",[e._v("Make a dump of the database")]),e._v(" "),a("li",[e._v("Stop BTCPay Server")]),e._v(" "),a("li",[e._v("Archive the Docker volumes and database dump\n"),a("ul",[a("li",[e._v("Excluding the blockchains "),a("code",[e._v("blocks")]),e._v(" and "),a("code",[e._v("chainstate")]),e._v(" directories")]),e._v(" "),a("li",[e._v("Optional: "),a("a",{attrs:{href:"#set-a-backup-passphrase"}},[e._v("Encrypt the archive")])])])]),e._v(" "),a("li",[e._v("Restart BTCPay Server")]),e._v(" "),a("li",[e._v("Cleanup: Remove temporary files like the database dump")])]),e._v(" "),a("p",[e._v("If the backup directory doesn't exist yet, the script will create it.\nWith these preparations taken, the backup process is now starting.")]),e._v(" "),a("p",[e._v("The script has checks to ensure it either works or fails with a comprehensive error message at every step of the way.\nIf there are errors, you will be notified like this:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("🚨 Database container could not be started or found.\n")])])]),a("p",[e._v("If everything works smoothly, you will see multiple completed marks in your console.\nWhenever the backup has completed successfully, it will state:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("✅ Backup done => /var/lib/docker/volumes/backup_datadir/_data/backup.tar.gz\n")])])]),a("p",[e._v("Your BTCPay Server has now finished the backup process.\nYou must store these backups safely, for instance, by copying them to a remote server.")]),e._v(" "),a("p",[e._v("After making a backup the first time, it is always wise to at least test your backup in a restore scenario.\nWe will go over the extra options you can set with your backup in the next topic.")]),e._v(" "),a("h3",{attrs:{id:"set-a-backup-passphrase"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#set-a-backup-passphrase"}},[e._v("#")]),e._v(" Set a backup passphrase")]),e._v(" "),a("p",[e._v("You can set the "),a("code",[e._v("BTCPAY_BACKUP_PASSPHRASE")]),e._v(" environment variable for encrypting the backup.\nThis passphrase will be used by the backup and restore scripts to encrypt and decrypt the backup file.\nFor the backup script, this would look like the following:")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Set the passphrase without adding it to the shell history")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" -s -p "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Enter passphrase: "')]),e._v(" BTCPAY_BACKUP_PASSPHRASE\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" BTCPAY_BACKUP_PASSPHRASE\n\n./btcpay-backup.sh\n")])])]),a("p",[e._v("This "),a("code",[e._v("BTCPAY_BACKUP_PASSPHRASE")]),e._v(" if set, is necessary to be in the "),a("a",{attrs:{href:"#how-to-restore"}},[e._v("restore process")]),e._v(" as well.")]),e._v(" "),a("h3",{attrs:{id:"automation-by-crontab"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automation-by-crontab"}},[e._v("#")]),e._v(" Automation by crontab")]),e._v(" "),a("p",[e._v("Here is an example of a crontab script that does a nightly backup at 4:15 AM:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("SHELL=/bin/bash\nPATH=/bin:/usr/sbin:/usr/bin:/usr/local/bin\n15 4 * * * /root/btcpayserver-docker/btcpay-backup.sh >/dev/null 2>&1\n")])])]),a("p",[e._v("You need to set the right "),a("code",[e._v("SHELL")]),e._v(" and "),a("code",[e._v("PATH")]),e._v(", so that the script can run with the correct context.\nYou might also want to set the "),a("code",[e._v("BTCPAY_BACKUP_PASSPHRASE")]),e._v(" environment variable.")]),e._v(" "),a("h2",{attrs:{id:"how-to-restore"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-restore"}},[e._v("#")]),e._v(" How to restore?")]),e._v(" "),a("p",[e._v("It's very similar to the "),a("code",[e._v("btcpay-backup.sh")]),e._v(" process but in reverse.\nThe "),a("code",[e._v("btcpay-restore.sh")]),e._v(" script needs to be run with the path to your "),a("code",[e._v("backup.tar.gz")]),e._v(" file.")]),e._v(" "),a("p",[e._v("First off, open a terminal and type the following as root.\nRemember that if you set "),a("code",[e._v("BTCPAY_BACKUP_PASSPHRASE")]),e._v(" on the backup, you also need to provide it for decryption :")]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# The restore script needs to be run as the root user")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("su")]),e._v(" -\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# As the other scripts, it is inside the BTCPay base directory")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$BTCPAY_BASE_DIRECTORY")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Optional: Set the passphrase if you have used one for the backup")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("read")]),e._v(" -s -p "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Enter passphrase: "')]),e._v(" BTCPAY_BACKUP_PASSPHRASE\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("export")]),e._v(" BTCPAY_BACKUP_PASSPHRASE\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Run the restore script with the full path to the backup file")]),e._v("\n./btcpay-restore.sh /var/backups/backup.tar.gz.gpg\n")])])]),a("p",[e._v("The script will do the following steps:")]),e._v(" "),a("ul",[a("li",[e._v("Extract (and decrypt) the backup archive")]),e._v(" "),a("li",[e._v("Stop BTCPay Server")]),e._v(" "),a("li",[e._v("Restore the Docker volumes")]),e._v(" "),a("li",[e._v("Start the database container")]),e._v(" "),a("li",[e._v("Import the database dump")]),e._v(" "),a("li",[e._v("Restart BTCPay Server")]),e._v(" "),a("li",[e._v("Cleanup: Remove the temporary restore directory")])]),e._v(" "),a("p",[e._v("If the backup file cannot be found in the provided path, the script will exit with an error.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("🚨 /var/backups/backup.tar.gz.gpg does not exist.\n")])])]),a("p",[e._v("Just as the "),a("code",[e._v("btcpay-backup.sh")]),e._v(" script, the restore will stop at ANY error it may encounter.\nIf the backup file was created while the "),a("code",[e._v("BTCPAY_BACKUP_PASSPHRASE")]),e._v(" was set but not used on restoring, the following error would occur:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("🚨  Decryption failed. Please check the error message above.\n")])])]),a("p",[e._v("When the restore has completed, you get the message:")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("✅ Restore done\n")])])]),a("p",[e._v("Everything should be up and running again when the restore is complete.\nYou've successfully restored your BTCPay Server. Congratulations!")]),e._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("Always make sure your backup strategy is tested and fits your needs.\nNo one solution fits all, and we tried to cover the basic cases.\nFor the latest updates, always feel free to ask on the BTCPay Server community channels.")])])])}),[],!1,null,null,null);t.default=r.exports}}]);