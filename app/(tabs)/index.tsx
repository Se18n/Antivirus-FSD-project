import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Shield, CircleCheck as CheckCircle2, TriangleAlert as AlertTriangle } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

export default function ProtectionScreen() {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#1a1b1e', '#2c2d31']}
        style={styles.background}
      />
      
      <Animated.View entering={FadeInDown.delay(100)} style={styles.header}>
        <Shield size={48} color="#4CAF50" />
        <Text style={styles.title}>Device Protected</Text>
        <Text style={styles.subtitle}>All systems are running normally</Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200)} style={styles.statsContainer}>
        <View style={styles.statCard}>
          <CheckCircle2 size={24} color="#4CAF50" />
          <Text style={styles.statTitle}>Real-time Protection</Text>
          <Text style={styles.statValue}>Active</Text>
        </View>

        <View style={styles.statCard}>
          <AlertTriangle size={24} color="#FFB300" />
          <Text style={styles.statTitle}>Last Scan</Text>
          <Text style={styles.statValue}>2 hours ago</Text>
        </View>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(300)} style={styles.featuresContainer}>
        <TouchableOpacity style={styles.featureButton}>
          <Text style={styles.featureButtonText}>Quick Scan</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton}>
          <Text style={styles.featureButtonText}>Update Database</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.featureButton}>
          <Text style={styles.featureButtonText}>Security Report</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
  },
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  header: {
    alignItems: 'center',
    paddingTop: 40,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  statCard: {
    backgroundColor: '#2c2d31',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    width: '45%',
  },
  statTitle: {
    color: '#fff',
    fontSize: 14,
    marginTop: 8,
  },
  statValue: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
  },
  featuresContainer: {
    padding: 16,
    marginTop: 20,
  },
  featureButton: {
    backgroundColor: '#2c2d31',
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  featureButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});