
import { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import ToolCard from '@/components/ToolCard';
import { toolsData } from '@/data/toolsData';

const Index = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Get unique categories
  const categories = ['all', ...Array.from(new Set(toolsData.map(tool => tool.category)))];

  // Filter tools based on search and category
  const filteredTools = useMemo(() => {
    let filtered = toolsData;

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(tool => tool.category === activeCategory);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(tool =>
        tool.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tool.benefits.some(benefit => benefit.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    return filtered;
  }, [searchQuery, activeCategory]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-slate-900 mb-2">
              Tool Hub Showcase
            </h1>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover the best tools and products to supercharge your productivity and workflow
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <Input
              type="text"
              placeholder="Search tools, categories, or benefits..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-3 text-base border-slate-300 focus:border-blue-500 focus:ring-blue-500 rounded-xl shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs value={activeCategory} onValueChange={setActiveCategory} className="w-full">
          {/* Category Tabs */}
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8 bg-white/60 backdrop-blur-sm border border-slate-200 rounded-xl p-1">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="capitalize text-sm font-medium rounded-lg data-[state=active]:bg-blue-600 data-[state=active]:text-white transition-all duration-200"
              >
                {category === 'all' ? 'All Tools' : category.replace('-', ' ')}
              </TabsTrigger>
            ))}
          </TabsList>

          {/* Tools Grid */}
          {categories.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTools.map((tool) => (
                  <ToolCard key={tool.id} tool={tool} />
                ))}
              </div>
              
              {filteredTools.length === 0 && (
                <div className="text-center py-12">
                  <div className="text-slate-400 text-6xl mb-4">🔍</div>
                  <h3 className="text-xl font-semibold text-slate-700 mb-2">No tools found</h3>
                  <p className="text-slate-500">
                    Try adjusting your search or browse different categories
                  </p>
                </div>
              )}
            </TabsContent>
          ))}
        </Tabs>

        {/* Results Count */}
        {(searchQuery || activeCategory !== 'all') && (
          <div className="mt-8 text-center text-slate-600">
            Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
            {searchQuery && ` matching "${searchQuery}"`}
            {activeCategory !== 'all' && ` in ${activeCategory.replace('-', ' ')}`}
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-slate-600">
            <p>&copy; 2024 Tool Hub Showcase. Discover the tools that drive success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
