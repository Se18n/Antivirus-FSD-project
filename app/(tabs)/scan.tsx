import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Activity, CircleCheck as CheckCircle2, File } from 'lucide-react-native';
import Animated, { FadeIn, FadeInDown } from 'react-native-reanimated';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

export default function ScanScreen() {
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);

  const startScan = () => {
    setScanning(true);
    setProgress(0);
    simulateScan();
  };

  const simulateScan = () => {
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += 1;
      setProgress(currentProgress);
      
      if (currentProgress >= 100) {
        clearInterval(interval);
        setScanning(false);
      }
    }, 50);
  };

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.delay(100)} style={styles.header}>
        <Activity size={48} color="#4CAF50" />
        <Text style={styles.title}>Security Scan</Text>
        <Text style={styles.subtitle}>
          {scanning ? 'Scanning your device...' : 'Ready to scan'}
        </Text>
      </Animated.View>

      <Animated.View entering={FadeInDown.delay(200)} style={styles.progressContainer}>
        <AnimatedCircularProgress
          size={200}
          width={15}
          fill={progress}
          tintColor="#4CAF50"
          backgroundColor="#2c2d31"
          rotation={0}
          lineCap="round">
          {(fill) => (
            <View style={styles.progressContent}>
              <Text style={styles.progressText}>{`${Math.round(fill)}%`}</Text>
              <Text style={styles.progressLabel}>
                {scanning ? 'Scanning' : 'Complete'}
              </Text>
            </View>
          )}
        </AnimatedCircularProgress>
      </Animated.View>

      <Animated.View entering={FadeIn.delay(300)} style={styles.statsContainer}>
        <View style={styles.statItem}>
          <File size={24} color="#4CAF50" />
          <Text style={styles.statValue}>23,492</Text>
          <Text style={styles.statLabel}>Files Scanned</Text>
        </View>

        <View style={styles.statItem}>
          <CheckCircle2 size={24} color="#4CAF50" />
          <Text style={styles.statValue}>0</Text>
          <Text style={styles.statLabel}>Threats Found</Text>
        </View>
      </Animated.View>

      <TouchableOpacity
        style={[styles.scanButton, scanning && styles.scanningButton]}
        onPress={startScan}
        disabled={scanning}>
        <Text style={styles.scanButtonText}>
          {scanning ? 'Scanning...' : 'Start Scan'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1b1e',
    padding: 16,
  },
  header: {
    alignItems: 'center',
    marginBottom: 32,
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
  progressContainer: {
    alignItems: 'center',
    marginBottom: 32,
  },
  progressContent: {
    alignItems: 'center',
  },
  progressText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
  },
  progressLabel: {
    fontSize: 16,
    color: '#888',
    marginTop: 8,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 32,
  },
  statItem: {
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 8,
  },
  statLabel: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  scanButton: {
    backgroundColor: '#4CAF50',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  scanningButton: {
    backgroundColor: '#2c2d31',
  },
  scanButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});