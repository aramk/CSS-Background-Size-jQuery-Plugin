CSS-Background-Size-jQuery-Plugin
=================================

Replicates the functionality of CSS3 background-size for "contain" and "cover" keywords not supported by browsers below IE9.

#How to#

Add an image inside a div. Set the height and width of the div and set 'cover' or 'contain' to replicate the CSS3 background-size property in browsers that don't support it.

	<div style="width: 400; height: 300;">
		<img class="background-size-cover" src="apple.jpg" />
	</div>
	
	<script>
	$(document).ready(function() {
		$('.background-size-cover').bgdSize('cover');
	});
	</script>

#Methods#

These are valid:

	$('.background-size-cover').bgdSize('cover');
	$('.background-size-cover').bgdSize('contain');
	$('.background-size-cover').bgdSize({mode : 'contain'});
