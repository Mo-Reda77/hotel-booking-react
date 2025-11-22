import React, { useEffect, useState } from "react";
import { FaWifi, FaSwimmingPool, FaUtensils, FaSnowflake } from "react-icons/fa";

export default function Rooms() {
  const [rooms, setRooms] = useState([]);
  const [selectedRoom, setSelectedRoom] = useState(null); // الغرفة اللي اتفتحت تفاصيلها

  useEffect(() => {
    const hotelRooms = [
      {
        id: 1,
        name: "Deluxe Room",
        description:
          "A spacious elegant room with a stunning city view. Includes breakfast, Wi‑Fi, and full amenities.",
        details:
          "The Deluxe Room offers a comfortable king-size bed, private bathroom, minibar, and balcony with city views. Guests enjoy complimentary breakfast, daily housekeeping, and access to our rooftop pool.",
        imageUrl: "/images/room1.jpg",
        price: 120,
        features: ["wifi", "breakfast", "ac"],
      },
      {
        id: 2,
        name: "Executive Suite",
        description:
          "Luxury suite with a separate living room, sea‑view balcony, and premium amenities.",
        details:
          "The Executive Suite provides an exclusive living room area, private terrace overlooking the Nile, espresso machine, and 24‑hour room service. Ideal for honeymooners or business travelers.",
        imageUrl: "/images/room2.jpg",
        price: 220,
        features: ["wifi", "pool", "ac"],
      },
      {
        id: 3,
        name: "Family Room",
        description:
          "Comfortable family room with two king beds and free access to the pool facilities.",
        details:
          "The Family Room is perfect for parents and kids, featuring two king-size beds, sofa seating, and smart TV with Netflix. Includes daily breakfast and free pool access for all guests.",
        imageUrl: "/images/room3.jpg",
        price: 180,
        features: ["wifi", "breakfast", "pool"],
      },
    ];

    setRooms(hotelRooms);
  }, []);

  return (
    <section id="Room" className="py-5 text-center">
      <h3 className="fw-bold mb-2">Rooms & Suites</h3>
      <p className="text-secondary mb-5">
        Explore our elegant rooms and luxurious suites designed for comfort and relaxation at Grand Hotel.
      </p>

      <div className="container">
        <div className="row g-4 justify-content-center">
          {rooms.map((room) => (
            <div className="col-lg-4 col-md-6" key={room.id}>
              <div className="card rounded-4 overflow-hidden shadow-sm border-0">
                <img
                  src={room.imageUrl}
                  alt={room.name}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                />
                <div className="card-body text-start">
                  <h6 className="fw-bold">{room.name}</h6>
                  <p className="small text-secondary mb-2">{room.description}</p>

                  <div className="d-flex gap-3 text-secondary small mb-2 align-items-center">
                    {room.features.includes("wifi") && <FaWifi title="Free Wi‑Fi" />}
                    {room.features.includes("pool") && <FaSwimmingPool title="Pool Access" />}
                    {room.features.includes("breakfast") && <FaUtensils title="Breakfast Included" />}
                    {room.features.includes("ac") && <FaSnowflake title="Air Conditioned" />}
                  </div>

                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-primary fw-bold">${room.price} / night</span>
                    <button
                      className="btn btn-outline-primary btn-sm fw-semibold"
                      onClick={() => setSelectedRoom(room)}
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ✅ مودال التفاصيل */}
      {selectedRoom && (
        <div
          className="modal fade show"
          tabIndex="-1"
          style={{
            display: "block",
            backgroundColor: "rgba(0,0,0,0.6)",
          }}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title">{selectedRoom.name}</h5>
                <button
                  className="btn-close"
                  onClick={() => setSelectedRoom(null)}
                ></button>
              </div>
              <div className="modal-body">
                <img
                  src={selectedRoom.imageUrl}
                  alt={selectedRoom.name}
                  className="img-fluid rounded mb-3"
                  style={{ width: "100%", height: "280px", objectFit: "cover" }}
                />
                <p>{selectedRoom.details}</p>
                <ul className="text-secondary small mb-3">
                  {selectedRoom.features.includes("wifi") && <li>Free high‑speed Wi‑Fi</li>}
                  {selectedRoom.features.includes("pool") && <li>Access to swimming pool</li>}
                  {selectedRoom.features.includes("breakfast") && <li>Complimentary breakfast</li>}
                  {selectedRoom.features.includes("ac") && <li>Fully air‑conditioned room</li>}
                </ul>
                <h6 className="fw-bold text-primary">
                  Price: ${selectedRoom.price} / night
                </h6>
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={() => setSelectedRoom(null)}
                >
                  Close
                </button>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}