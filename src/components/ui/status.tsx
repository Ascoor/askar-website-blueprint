import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Users, Award, Clock, Star } from 'lucide-react';

// Dummy translation function, replace with your actual i18n solution if needed
const t = (key: string) => {
  const translations: Record<string, string> = {
    'stats.projects': 'Projects',
    'stats.clients': 'Clients',
    'stats.experience': 'Years Experience',
    'stats.team': 'Team Members',
  };
  return translations[key] || key;
};

const stats = [
  {
    icon: Users,
    valueKey: 'stats.projects',
    value: '500+',
    color: 'text-primary',
  },
  {
    icon: Star,
    valueKey: 'stats.clients',
    value: '300+',
    color: 'text-accent',
  },
  {
    icon: Clock,
    valueKey: 'stats.experience',
    value: '10+',
    color: 'text-success',
  },
  {
    icon: Award,
    valueKey: 'stats.team',
    value: '50+',
    color: 'text-warning',
  },
];

const Status = () => (
  // Stats Section
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8"
      >
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="border-0 shadow-lg hover:shadow-xl transition-glow hover-lift hover-glow">
                <CardContent className="p-8">
                  <Icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-foreground mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <p className="text-muted-foreground font-medium">
                    {t(stat.valueKey)}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  </section>
);

export default Status;
