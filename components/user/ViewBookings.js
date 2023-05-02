

const ViewBookings = () => {
  return (
  <div className="container mx-auto py-4 h-96">
  <h2 className="text-2xl font-bold mb-4">My Bookings</h2>
  
    <div className="px-4 py-3 border-b border-gray-200">
      
      <div className="flex justify-between">
        <div className="w-1/4">Booking ID</div>
        <div className="w-1/4">Date</div>
        <div className="w-1/4">Time</div>
        <div className="w-1/4">Movie</div>
        <div className="w-1/4">Screen</div>
        <div className="w-1/4">Seats</div>
      </div>
    </div>
    
</div>
  )
}

export default ViewBookings