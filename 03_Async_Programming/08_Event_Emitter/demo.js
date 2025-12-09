/**
 * Here we will use Node.js EventEmitter to create and handle custom events.
 *
 * 💡 Definition:
 * EventEmitter is a core Node.js feature that allows different parts of your
 * application to communicate using events. One part of the program "emits" an event,
 * and other parts "listen" for that event and react when it happens.  
 * This makes your code more flexible, modular, and suitable for asynchronous workflows.
 *
 * 
 * It then registers event listeners and emits events,
 * showing how multiple handlers can respond instantly.
 *
 * 🎯 Key Points (for Notes)
 * - EventEmitter helps your application follow an event-driven architecture.
 * - You can create custom events and attach multiple listeners to each event.
 * - Listeners run asynchronously, supporting non-blocking I/O.
 * - Useful for building scalable, decoupled systems.
 *
 * This Explains:
 *   ✓ How to create an EventEmitter instance
 *   ✓ How to register listeners using .on() or .once()
 *   ✓ How to emit events with .emit()
 *   ✓ A clean, modular pattern widely used in real Node.js applications
 */

// Import the EventEmitter class
const EventEmitter = require('events');

const myEmitter = new EventEmitter();

// Register an event listener
myEmitter.on('getName', (name) => {
  console.log(`Hello, ${name}!`);
});

// Emit the 'getName' event
myEmitter.emit('getName', 'Anand');
myEmitter.emit('getName', 'Sanjay');



/**
 * 🏢 Enterprise-Level Code Example 
 * 
 * Example - 1 🏡 Airbnb-Inspired Example: Booking Orchestration
 */
const EventEmitter = require('events');
class BookingWorkflow extends EventEmitter {}

const workflow = new BookingWorkflow();

// Step 1: Charge Payment
workflow.on('booking:created', (booking) => {
  console.log('💳 Charging payment for booking:', booking.id);
  // paymentService.charge(booking)
});

// Step 2: Notify the host
workflow.on('booking:created', (booking) => {
  console.log('📨 Notifying host:', booking.hostId);
  // emailService.sendMail(hostId)
});

// Step 3: Schedule Cleaning
workflow.on('booking:created', (booking) => {
  console.log('🧹 Scheduling cleaning for:', booking.propertyId);
  // cleaningService.schedule(propertyId)
});

// Emit event when booking occurs
workflow.emit('booking:created', {
  id: 'B123',
  userId: 'U55',
  hostId: 'H400',
  propertyId: 'P890'
});



/**
 * 🏢 Enterprise-Level Code Example 
 * 
 * Example - 2 🏡 Airbnb-Inspired Example: Booking Orchestration
 */
const EventEmitter = require('events');
class OrderEventBus extends EventEmitter {}

const orderBus = new OrderEventBus();

// Step 1: Reduce inventory
orderBus.on('order:placed', (order) => {
  console.log(`📉 Reducing inventory for ${order.productId}`);
  // inventoryService.decrement(order.productId)
});

// Step 2: Fraud detection notification
orderBus.on('order:placed', (order) => {
  if (order.amount > 5000) {
    console.log(`🚨 Fraud check triggered for order ${order.id}`);
  }
});

// Step 3: Sending confirmation email
orderBus.on('order:placed', (order) => {
  console.log(`📧 Sending confirmation email to ${order.userEmail}`);
  // emailService.send(order.userEmail)
});

// Emit order event
orderBus.emit('order:placed', {
  id: 'O789',
  productId: 'P111',
  userEmail: 'customer@amazon.com',
  amount: 6000
});
