import { Monitor, Smartphone, Eye, Square, Minimize2 } from 'lucide-react';
import { useVR } from '../context/VRContext';

export default function VRModeToggle() {
  const {
    isVRMode,
    isStereoMode,
    toggleVRMode,
    toggleStereoMode,
  } = useVR();

  if (isVRMode) {
    return (
      <div className="flex items-center gap-1.5">
        <button
          onClick={toggleStereoMode}
          title={isStereoMode ? 'Exit split-screen mode' : 'Enable VR box mode (split-screen)'}
          className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
            isStereoMode
              ? 'bg-purple-500/20 text-purple-300 border border-purple-500/40'
              : 'bg-slate-800 text-slate-400 border border-slate-700 hover:bg-slate-700 hover:text-slate-200'
          }`}
        >
          {isStereoMode ? (
            <>
              <Eye className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Stereo</span>
            </>
          ) : (
            <>
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">VR Box</span>
            </>
          )}
        </button>
        <button
          onClick={toggleVRMode}
          title="Exit VR mode"
          className="flex items-center gap-1.5 px-2.5 py-1.5 bg-red-500/20 text-red-300 border border-red-500/40 rounded-lg text-xs font-medium hover:bg-red-500/30 transition-all"
        >
          <Minimize2 className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Exit VR</span>
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={toggleVRMode}
      title="Enter VR mode - Use your phone in a VR headset for immersive experience"
      className="flex items-center gap-1.5 px-2.5 py-1.5 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 border border-purple-500/40 rounded-lg text-xs font-medium hover:from-purple-500/30 hover:to-cyan-500/30 transition-all"
    >
      <Monitor className="w-3.5 h-3.5" />
      <span className="hidden sm:inline">VR Mode</span>
      <Eye className="w-3 h-3 text-cyan-400" />
    </button>
  );
}
