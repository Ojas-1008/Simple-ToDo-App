function MusicPlayer() {
    const [volume, setVolume] = useState(50);
    return (
        <div>
            <VolumeSlider volume={volume} onVolumneChange={(newVolume) => setVolume(newVolume)} />
        </div>
    )
}

function VolumeSlider({ volume, onVolumneChange }) {
    return (
        <input type="range" min="0" max="100" value={volume} onChange={(e) => onVolumneChange(Number(e.target.value))} />
    )
}