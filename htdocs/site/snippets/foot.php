

<?php
	// This is required for css livereload to work (works only in debug)
	if(option('debug')) {
		echo js('/assets/css/style.js');
	}
?>
<?= js('/assets/js/main.js') ?>
</body>

</body>
</html>