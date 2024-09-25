import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Play, Pause, Volume2, SkipForward, Maximize, ThumbsUp, ThumbsDown, Share2 } from "lucide-react"

export default function Component() {
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => setIsPlaying(!isPlaying)

  return (
    <div className="max-w-4xl mx-auto space-y-4">
      <div className="relative aspect-video bg-black">
        <video className="w-full h-full">
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            variant="ghost"
            size="icon"
            className="w-16 h-16 text-white bg-black/50 rounded-full hover:bg-black/70"
            onClick={togglePlay}
          >
            {isPlaying ? <Pause className="w-8 h-8" /> : <Play className="w-8 h-8" />}
          </Button>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </Button>
              <Button variant="ghost" size="icon">
                <SkipForward className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Volume2 className="w-5 h-5" />
              </Button>
              <div className="text-sm">0:00 / 9:56</div>
            </div>
            <Button variant="ghost" size="icon">
              <Maximize className="w-5 h-5" />
            </Button>
          </div>
          <Slider
            defaultValue={[0]}
            max={100}
            step={1}
            className="mt-2"
          />
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Big Buck Bunny</h2>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src="/placeholder-user.jpg" alt="Channel" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold">Blender Foundation</h3>
              <p className="text-sm text-gray-500">1.2M subscribers</p>
            </div>
          </div>
          <Button>Subscribe</Button>
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="outline" className="flex items-center space-x-2">
            <ThumbsUp className="w-4 h-4" />
            <span>123K</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <ThumbsDown className="w-4 h-4" />
            <span>Dislike</span>
          </Button>
          <Button variant="outline" className="flex items-center space-x-2">
            <Share2 className="w-4 h-4" />
            <span>Share</span>
          </Button>
        </div>
      </div>
    </div>
  )
}