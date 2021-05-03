import React from 'react';
import Moment from "react-moment";
import 'moment/locale/es';

const Fecha = ({children}) =>
    <Moment fromNow locale="es">{children}</Moment>;

export {Fecha};