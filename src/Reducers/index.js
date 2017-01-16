import { combineReducers } from 'redux'; 
import BooksReducer from './producer_books.js';
import SidemenuReducer from './producer_sidemenu.js';
import DatatableReducer from './producer_datatable.js';
import FaqReducer from './producer_faq.js';
import AddTicketReducer from './producer_addticket.js';
import TicketReducer from './producer_ticket.js';
import ContactReducer from './producer_contact.js';
import TicketPickerReducer from './producer_ticketpicker.js';
import { reducer as awaitReducer } from 'redux-await';

const rootReducer = combineReducers({
	book: BooksReducer,
	sidemenu: SidemenuReducer,
	datatable: DatatableReducer,
	faq: FaqReducer,
	addticketdata: AddTicketReducer,
	ticketdata: TicketReducer,
	contactdata: ContactReducer,
	ticketpickerdata: TicketPickerReducer,
	await: awaitReducer
});

export default rootReducer;