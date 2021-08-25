import React, { useState } from "react";
import { Route, NavLink, HashRouter, Switch } from "react-router-dom";
import { useMutation } from '@apollo/client';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

