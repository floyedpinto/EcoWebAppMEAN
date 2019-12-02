'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 *  Schema for Event object.
 */
let Event = new Schema({

    /**
     * Name of the Event.
     */
    name: {
        type: String
    },


    /**
     * Cause of the event
     */
    cause: {
        type: String
    },


    /**
     * Venue of the event
     */
    venue: {
        type: String
    },


    /**
     * City of the event
     */
    city: {
        type: String
    },


    /**
     * State of the event
     */
    state: {
        type: String
    },


    /**
     * Country of the event
     */
    country: {
        type: String
    },

    /**
     * Zip of the event
     */
    zip: {
        type: String
    },


    /**
     * Description of the event
     */
    description: {
        type: String
    },


    /**
     * Status of the Event (UPCOMING, LIVE, COMPLETED, CANCELLED).
     */
    status: {
        type: String
    },


    /**
     * Event Start date.
     */
    dateOfEvent: {
        type: Date
    },


    /**
     * Event created date.
     */
    createdDate: {
        type: Date,
        default: Date.now
    },


    /**
     * Max attendees
     */
    maxAttendees: {
        type: Number
    },


    /**
     * Wheelchair accessible
     */
    isWheelchair: {
        type: Boolean,
        default: false
    },


    /**
     * Private/Public event
     */
    isPrivate: {
        type: Boolean,
        default: false
    },


    /**
     * Private/Public event
     */
    creator: {
        type: String
    },


    /**
     * Time storing the time of the event
     */
    time: {
        hour: {
            type: Number
        }
        ,
        minute: {
            type: Number
        }
    },


    /**
     * Date information storing it in year, month and date
     */
    dateOfEvent:
    {
        year: {
            type: Number
        }
        ,

        month: {
            type: Number
        }
        ,
        day: {
            type: Number
        }
    },
    // attendees: [
    //     {
    //         ref: 'Attendee',
    //         type: mongoose.Schema.Types.ObjectId
    //     }
    // ]

    attendees: {
        // ref: 'Attendee',
        // type: mongoose.Schema.Types.ObjectId

        name: {
            type: String
        },

        email: {
            type: String
        }
    }


}, {
    versionKey: false
});

// Duplicate the id field as mongoose returns _id field instead of id.
Event.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
Event.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('event', Event);