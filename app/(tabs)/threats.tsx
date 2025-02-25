import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { TriangleAlert as AlertTriangle, Shield, Trash2 } from 'lucide-react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';

const threats = [
  {
    id: 1,
    name: 'Suspicious App',
    path: '/data/app/com.suspicious.app',
    type: 'Malware',
    severity: 'High',
  },
  {
    id: 2,
    name: 'Tracking Cookie',
    path: '/data/browser/cookies',
    type: 'Privacy Risk',
    severity: 'Medium',
  },
  {
    id: 3,
    name: 'Unwanted Process',
    path: '/system/processes/unwanted',
    type: 'PUP',
    severity: 'Low',
  },
];

export default function ThreatsScreen() {
  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInDown.delay(100)} style={styles.header}>
        <AlertTriangle size={48} color="#FF5252" />
        <Text style={styles.title}>Detected Threats</Text>
        <Text style={styles.subtitle}>3 threats found on your device</Text>
      </Animated.View>

      <ScrollView style={styles.threatsList}>
        {threats.map((threat, index) => (
          <Animated.View
            key={threat.id}
            entering={FadeInDown.delay(150 * (index + 1))}
            style={styles.threatCard}>
            <View style={styles.threatHeader}>
              <Shield size={24} color="#FF5252" />
              <Text style={styles.threatName}>{threat.name}</Text>
              <View
                style={[
                  styles.severityBadge,
                  {
                    backgroundColor:
                      threat.severity === 'High'
                        ? '#FF5252'
                        : threat.severity === 'Medium'
                        ? '#FFB300'
                        : '#4CAF50',
                  },
                ]}>
                <Text style={styles.severityText}>{threat.severity}</Text>
              </View>
            </View>

            <View style={styles.threatDetails}>
              <Text style={styles.threatType}>Type: {threat.type}</Text>
              <Text style={styles.threatPath}>{threat.path}</Text>
            </View>

            <TouchableOpacity style={styles.removeButton}>
              <Trash2 size={20} color="#fff" />
              <Text style={styles.removeButtonText}>Remove Threat</Text>
            </TouchableOpacity>
          </Animated.View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.actionButton}>
        <Text style={styles.actionButtonText}>Remove All Threats</Text>
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
    marginBottom: 24,
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
  threatsList: {
    flex: 1,
  },
  threatCard: {
    backgroundColor: '#2c2d31',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  threatHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  threatName: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 12,
    flex: 1,
  },
  severityBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  severityText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  threatDetails: {
    marginBottom: 12,
  },
  threatType: {
    color: '#888',
    fontSize: 14,
    marginBottom: 4,
  },
  threatPath: {
    color: '#888',
    fontSize: 12,
  },
  removeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF5252',
    padding: 8,
    borderRadius: 8,
    justifyContent: 'center',
  },
  removeButtonText: {
    color: '#fff',
    marginLeft: 8,
    fontWeight: '600',
  },
  actionButton: {
    backgroundColor: '#FF5252',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 16,
  },
  actionButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});