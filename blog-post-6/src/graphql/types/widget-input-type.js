'use strict';

import { GraphQLInputObjectType, GraphQLID, GraphQLInt, GraphQLString } from 'graphql';

export const widgetTypeInput = new GraphQLInputObjectType({
	name: 'WidgetInput',
	description: 'An update input widget object',
	fields: () => ({
		id: {
			type: GraphQLID,
			description: 'The id of a widget'
		},
		name: {
			type: GraphQLString,
			description: 'The name of a widget'
		},
		description: {
			type: GraphQLString,
			description: 'The description of a widget'
		},
		color: {
			type: GraphQLString,
			description: 'The color of a widget'
		},
		size: {
			type: GraphQLString,
			description: 'The size of a widget'
		},
		quantity: {
			type: GraphQLInt,
			description: 'The quantity of a widget'
		}
	})
});