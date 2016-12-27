import 'source-map-support/register';

import { server } from 'universal-webpack';
import settings from '../../../configs/webpack/universal-webpack-settings';
import configuration from '../../../configs/webpack/webpack.config';

server(configuration, settings);
