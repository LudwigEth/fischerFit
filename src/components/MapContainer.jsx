import { APIProvider, Map, AdvancedMarker } from '@vis.gl/react-google-maps'

function MapContainer() {
  const position = { lat: 53.0475966007112, lng: 8.850590528417028 }
  const mapId = '1ce706a756ccf005'

  return (
    <APIProvider apiKey={'AIzaSyCRB-StFGqz7EipZPssIvHG5F852bqT4CI'}>
      <div className="relative z-0 h-80 w-full overflow-hidden rounded-xl">
        <Map
          options={{
            streetViewControl: false,
            mapTypeControl: false,
          }}
          mapId={mapId}
          defaultCenter={position}
          defaultZoom={15}
        >
          <a
            target="https://www.google.com/maps/place/Marc+Fischer+Fitness+%7C+EMS+Training/@53.0475973,8.8505908,17z/data=!3m2!4b1!5s0x47b0d86c56f85895:0x11b84cf5264cf46c!4m6!3m5!1s0x47b0d86cf95159f5:0x3035a7da1382589!8m2!3d53.0475973!4d8.8505908!16s%2Fg%2F11c3kjm733?hl=de&entry=ttu"
            href="https://www.google.com/maps/place/Marc+Fischer+Fitness+%7C+EMS+Training/@53.0475973,8.8505908,17z/data=!3m2!4b1!5s0x47b0d86c56f85895:0x11b84cf5264cf46c!4m6!3m5!1s0x47b0d86cf95159f5:0x3035a7da1382589!8m2!3d53.0475973!4d8.8505908!16s%2Fg%2F11c3kjm733?hl=de&entry=ttu"
            className="absolute left-2 top-2 rounded-xl bg-white p-2 text-left opacity-95 shadow-md shadow-black/10"
          >
            <p className="text-sm font-bold">Steinsetzerstraße 21</p>
            <p className="text-xs text-blue-600">auf Google Maps ansehen</p>
          </a>
          <AdvancedMarker position={position} />
        </Map>
      </div>
    </APIProvider>
  )
}

export default MapContainer
