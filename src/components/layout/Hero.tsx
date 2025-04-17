import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <div className="relative flex pt-32 pb-20 sm:pt-40 sm:pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          One app to{" "}
          <span className="text-blue-600 font-bold">Replace them all</span>
          <br />
          <span className="text-gray-400">Build. Collaborate. Grow.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-400 mb-10">
          Tired of juggling between Jira, Slack, and Notion? Huly brings your
          tools together—simple, open-source, and built for teams that move
          fast.
        </p>
        <Button className="relative group px-8 py-6 text-lg bg-gradient-to-r from-primary to-accent hover:opacity-90">
          <span className="relative z-10">Try it free</span>
          <div className="absolute inset-0 bg-white/20 blur-lg group-hover:blur-xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
        </Button>
      </div>
    </div>
  );
}
