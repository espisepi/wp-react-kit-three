/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#save
 * @return {WPElement} Element to render.
 */
export default function save() {
	return (
		<h1> Esto solo se ve en la parte frontal, la parte que ven los usuarios de la pagina (file save.tsx) </h1>
	);
}