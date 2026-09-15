import { StyleSheet, View, useWindowDimensions } from 'react-native';

const PURPLE = '#9147FF';

export default function Splash() {
	const { width, height } = useWindowDimensions();
	const bulbSize = Math.min(width * 0.48, height * 0.34, 190);

	return (
		<View style={styles.container}>
			<View style={styles.topBar} />

			<View style={styles.content}>
				<View style={[styles.bulb, { width: bulbSize, height: bulbSize }]}>
					<View style={styles.bulbBase}>
						<View style={styles.baseLineTop} />
						<View style={styles.baseLineBottom} />
					</View>
				</View>

				<View style={[styles.ray, styles.rayTop]} />
				<View style={[styles.ray, styles.rayTopLeft]} />
				<View style={[styles.ray, styles.rayTopRight]} />
				<View style={[styles.ray, styles.rayLeft]} />
				<View style={[styles.ray, styles.rayRight]} />
			</View>

			<View style={styles.bottomBar} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#000',
	},
	topBar: {
		height: 36,
		backgroundColor: PURPLE,
	},
	content: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		position: 'relative',
	},
	bulb: {
		borderWidth: 11,
		borderColor: PURPLE,
		borderRadius: 999,
		marginTop: 34,
		transform: [{ translateY: 18 }],
		shadowColor: PURPLE,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.45,
		shadowRadius: 14,
		elevation: 8,
	},
	bulbBase: {
		position: 'absolute',
		width: '55%',
		height: '37%',
		left: '22.5%',
		bottom: '-10%',
		transform: [{ translateY: 35 }],
		backgroundColor: '#000',
		borderWidth: 11,
		borderTopWidth: 0,
		borderColor: PURPLE,
		borderBottomLeftRadius: 28,
		borderBottomRightRadius: 28,
	},
	baseLineTop: {
		position: 'absolute',
		height: 8,
		width: '100%',
		top: '30%',
		backgroundColor: PURPLE,
	},
	baseLineBottom: {
		position: 'absolute',
		height: 8,
		width: '100%',
		top: '62%',
		backgroundColor: PURPLE,
	},
	ray: {
		position: 'absolute',
		width: 14,
		height: 38,
		borderRadius: 10,
		backgroundColor: PURPLE,
		shadowColor: PURPLE,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.5,
		shadowRadius: 7,
		elevation: 4,
	},
	rayTop: {
		top: '24%',
	},
	rayTopLeft: {
		top: '29%',
		left: '29%',
		transform: [{ rotate: '-30deg' }],
	},
	rayTopRight: {
		top: '29%',
		right: '29%',
		transform: [{ rotate: '30deg' }],
	},
	rayLeft: {
		left: '17%',
		top: '48%',
		transform: [{ rotate: '90deg' }],
	},
	rayRight: {
		right: '17%',
		top: '48%',
		transform: [{ rotate: '90deg' }],
	},
	bottomBar: {
		height: 38,
		backgroundColor: PURPLE,
	},
});
