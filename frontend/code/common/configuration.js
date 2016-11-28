import * as _ from 'lodash';

import configuration from '../../configuration.defaults'
import specific_configuration from '../../configuration'

_.extend(configuration, specific_configuration)
export default configuration
