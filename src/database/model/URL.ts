import {prop, Typegoose} from '@hasezoey/typegoose'

export class URL extends Typegoose {
	@prop()
	hash?: string

	@prop()
	originURL?: string

	@prop()
	shortURL?: string

}

export const URLModel = new URL().getModelForClass(URL)