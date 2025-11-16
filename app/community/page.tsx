'use client'

import { useState } from 'react'
import { Heart, MessageCircle, Share2, Search, Filter, Plus } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState('discussions')
  const [searchQuery, setSearchQuery] = useState('')
  const [likedPosts, setLikedPosts] = useState<number[]>([])

  const toggleLike = (postId: number) => {
    setLikedPosts(prev =>
      prev.includes(postId) ? prev.filter(id => id !== postId) : [...prev, postId]
    )
  }

  const discussionPosts = [
    {
      id: 1,
      author: 'Sarah Chen',
      avatar: 'SC',
      role: 'Instructor',
      content: 'Great discussion everyone! Remember that the key to mastering UI design is understanding user behavior patterns.',
      timestamp: '2 hours ago',
      likes: 24,
      replies: 8,
      badge: 'instructor',
    },
    {
      id: 2,
      author: 'Mike Johnson',
      avatar: 'MJ',
      content: 'I have a question about the prototyping section. Can someone explain the difference between wireframes and mockups?',
      timestamp: '4 hours ago',
      likes: 12,
      replies: 5,
    },
    {
      id: 3,
      author: 'Emma Davis',
      avatar: 'ED',
      content: 'Just completed Module 3! The design thinking framework was incredibly helpful for my project.',
      timestamp: '1 day ago',
      likes: 34,
      replies: 12,
    },
  ]

  const resources = [
    {
      id: 1,
      title: 'UI Design Best Practices Checklist',
      author: 'John Wilson',
      type: 'Document',
      downloads: 156,
      rating: 4.8,
    },
    {
      id: 2,
      title: 'Color Theory Reference Guide',
      author: 'Lisa Park',
      type: 'PDF',
      downloads: 203,
      rating: 4.9,
    },
    {
      id: 3,
      title: 'Figma Design System Template',
      author: 'Alex Kumar',
      type: 'Template',
      downloads: 89,
      rating: 4.7,
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="border-b border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">Course Community</h1>
          <p className="text-muted-foreground">Connect, discuss, and collaborate with fellow learners</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Discussions & Resources */}
          <div className="md:col-span-2">
            {/* Search & Filter */}
            <div className="flex gap-3 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search discussions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="w-4 h-4" />
              </Button>
            </div>

            {/* Tabs */}
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
              <div className="flex items-center justify-between">
                <TabsList>
                  <TabsTrigger value="discussions">Discussions</TabsTrigger>
                  <TabsTrigger value="resources">Resources</TabsTrigger>
                  <TabsTrigger value="members">Members</TabsTrigger>
                </TabsList>
                <Button size="sm" className="gap-2">
                  <Plus className="w-4 h-4" />
                  New Post
                </Button>
              </div>

              {/* Discussions Tab */}
              <TabsContent value="discussions" className="space-y-4">
                {discussionPosts.map(post => (
                  <Card key={post.id} className="p-4 hover:border-primary/50 transition-colors">
                    <div className="flex gap-4">
                      <Avatar>
                        <AvatarFallback className="bg-primary text-primary-foreground">{post.avatar}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-foreground">{post.author}</h3>
                          {post.badge === 'instructor' && (
                            <Badge variant="secondary" className="text-xs">Instructor</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">{post.timestamp}</p>
                        <p className="text-foreground mb-4">{post.content}</p>
                        <div className="flex gap-4 text-muted-foreground">
                          <button
                            onClick={() => toggleLike(post.id)}
                            className="flex items-center gap-2 hover:text-primary transition-colors"
                          >
                            <Heart
                              className={`w-4 h-4 ${likedPosts.includes(post.id) ? 'fill-destructive text-destructive' : ''}`}
                            />
                            <span className="text-sm">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-primary transition-colors">
                            <MessageCircle className="w-4 h-4" />
                            <span className="text-sm">{post.replies}</span>
                          </button>
                          <button className="flex items-center gap-2 hover:text-primary transition-colors">
                            <Share2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Resources Tab */}
              <TabsContent value="resources" className="space-y-4">
                {resources.map(resource => (
                  <Card key={resource.id} className="p-4 hover:border-primary/50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-foreground">{resource.title}</h3>
                          <Badge variant="outline" className="text-xs">{resource.type}</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">by {resource.author}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex gap-1 mb-2 text-yellow-500">
                          {'★'.repeat(Math.floor(resource.rating))}
                          <span className="text-muted-foreground text-sm">{resource.rating}</span>
                        </div>
                        <p className="text-xs text-muted-foreground">{resource.downloads} downloads</p>
                      </div>
                    </div>
                  </Card>
                ))}
              </TabsContent>

              {/* Members Tab */}
              <TabsContent value="members" className="space-y-4">
                <div className="grid gap-4">
                  {[1, 2, 3, 4, 5, 6].map(i => (
                    <Card key={i} className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback className="bg-primary text-primary-foreground">M{i}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground">Member {i}</p>
                          <p className="text-sm text-muted-foreground">Joined 2 weeks ago</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Follow</Button>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-4">
            {/* Community Stats */}
            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-4">Community Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Total Members</span>
                  <span className="font-semibold text-foreground">1,234</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Active This Week</span>
                  <span className="font-semibold text-foreground">342</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground text-sm">Total Posts</span>
                  <span className="font-semibold text-foreground">5,678</span>
                </div>
              </div>
            </Card>

            {/* Featured Members */}
            <Card className="p-4">
              <h3 className="font-semibold text-foreground mb-4">Top Contributors</h3>
              <div className="space-y-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="flex items-center gap-2">
                    <Avatar className="h-8 w-8">
                      <AvatarFallback className="text-xs bg-primary text-primary-foreground">C{i}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">Contributor {i}</p>
                      <p className="text-xs text-muted-foreground">{50 - i * 5} posts</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Guidelines */}
            <Card className="p-4 bg-muted/30">
              <h3 className="font-semibold text-foreground mb-3 text-sm">Community Guidelines</h3>
              <ul className="text-xs text-muted-foreground space-y-2">
                <li>• Be respectful to all members</li>
                <li>• No spam or self-promotion</li>
                <li>• Stay on topic</li>
                <li>• Share knowledge freely</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
