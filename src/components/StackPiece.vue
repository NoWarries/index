<template>
	<div class="flex flex-col">
		<div class="h-36">
			<div class="container">
				<div class="cube" id="cube-1">
					<div class="front"></div>
					<div class="back"></div>
					<div class="right"></div>
					<div class="left"></div>
					<div class="top"></div>
					<div class="bottom"></div>
				</div>
			</div>
		</div>
		<div class="h-36">
			<div class="container">
				<div class="cube" id="cube-2">
					<div class="front"></div>
					<div class="back"></div>
					<div class="right"></div>
					<div class="left"></div>
					<div class="top"></div>
					<div class="bottom"></div>
				</div>
			</div>
		</div>
		<div class="h-36">
			<div class="container">
				<div class="cube" id="cube-3">
					<div class="front"></div>
					<div class="back"></div>
					<div class="right"></div>
					<div class="left"></div>
					<div class="top"></div>
					<div class="bottom"></div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'StackPiece.vue',
};
</script>

<style scoped lang="scss">
$height: 20%;

.container {
	width: 12.5rem;
	height: 12.5rem;
	perspective: 125rem;
	margin: 4rem;
	position: relative;
	.cube {
		transform-style: preserve-3d;
		width: inherit;
		height: inherit;
		position: relative;
		transform: rotateX(340deg) rotateY(45deg) rotateZ(0deg);
		& div {
			position: absolute;
			width: 100%;
			height: $height;
			border: solid 2px;
		}
		.top {
			transform: rotateX(90deg) translateZ(100px);
			bottom: $height - $height;
			height: 100%;
		}
		.bottom {
			transform: rotateX(-90deg) translateZ(100px);
			top: -$height * 4;
			height: 100%;
		}

		.right {
			transform: rotateY(90deg) translateZ(100px);
		}
		.left {
			transform: rotateY(-90deg) translateZ(100px);
		}

		.front {
			transform: rotateX(0deg) translateZ(100px);
		}
		.back {
			transform: rotateX(-180deg) translateZ(100px);
		}
	}
	#cube-1 {
		& div {
			@apply bg-rose-200/50;
		}
	}
	#cube-2 {
		& div {
			@apply bg-sky-500/50;
		}
	}
	#cube-3 {
		& div {
			@apply bg-orange-500/50;
		}
	}
}
</style>
