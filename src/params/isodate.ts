import type { ParamMatcher } from '@sveltejs/kit'

export const match: ParamMatcher = (param) => {
  const isIsoDateString = /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[0-1])$/.test(param)
  const dateIsInFuture = new Date(param) > new Date()

  return isIsoDateString && !dateIsInFuture
}
