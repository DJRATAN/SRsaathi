
import { ExternalLink, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface Tool {
  id: number;
  title: string;
  description: string;
  category: string;
  benefits: string[];
  referralLink: string;
  image: string;
  price: string;
}

interface ToolCardProps {
  tool: Tool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  const handleReferralClick = () => {
    window.open(tool.referralLink, '_blank', 'noopener,noreferrer');
  };

  return (
    <Card className="group h-full bg-white/80 backdrop-blur-sm border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 rounded-xl overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative h-48 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center overflow-hidden">
          <img
            src={tool.image}
            alt={tool.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3">
            <Badge variant="secondary" className="bg-white/90 text-slate-700 border-0">
              {tool.category.replace('-', ' ')}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
            {tool.title}
          </h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            {tool.description}
          </p>
        </div>

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-slate-800 mb-2 flex items-center">
            <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
            Key Benefits
          </h4>
          <ul className="space-y-1">
            {tool.benefits.slice(0, 3).map((benefit, index) => (
              <li key={index} className="text-sm text-slate-600 flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2 flex-shrink-0"></div>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center justify-between text-sm text-slate-500 mb-4">
          <span className="font-medium">{tool.price}</span>
        </div>
      </CardContent>

      <CardFooter className="p-6 pt-0">
        <Button
          onClick={handleReferralClick}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 font-medium group"
          size="lg"
        >
          Get Started
          <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ToolCard;
