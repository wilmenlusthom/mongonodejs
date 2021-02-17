import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModels.js';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req,res) => {
    let newContact = new Contact(req.body);
    newContact.save((err,contact) => {
        if(err) {
                res.send(err);
        }
        res.json(contact);
    });
}


export const getContacts = (req,res) => {
    Contact.find({}, (err,contact) => {
        if(err) {
                res.send(err);
        }
        res.json(contact);
    });
}

 export const getContactsWithID = (req,res) => {
    Contact.findById ( req.params.contactID , (err,contact) => { // harus sama dengan yang di routes
        if(err) {
                res.send(err);
        }
        res.json(contact);
        console.log(`GECONTACTSWITHID ${req.params.contactID}`);
    });   
}

export const updateContact = (req,res) => {
    Contact.findOneAndUpdate( { _id : req.params.contactID},req.body,{new : true ,useFindAndModify : false} ,(err,contact) => { // harus sama dengan yang di routes
        if(err) {
                res.send(err);
        }
        res.json(contact);
    });   
}

export const deleteContact = (req,res) => {
    Contact.remove( { _id : req.params.contactID},(err,contact) => { // harus sama dengan yang di routes
        if(err) {
                res.send(err);
        }
        res.json({message : 'successfully deleted'});    
        
    });   
}