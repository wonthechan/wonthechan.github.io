import { format, parseISO } from 'date-fns'

const SLUG_CAPTURE_REGEX = /^\/(.+)\/(\d{4}-\d{2}-\d{2})-(.+)\//

export function divideDateAndPath(slug) {
	// console.log(slug)
  const capturedByGroups = SLUG_CAPTURE_REGEX.exec(slug)
  // console.log(capturedByGroups)
  return [
    format(parseISO(capturedByGroups[2]), 'yyyy/MM/dd'),
    `/${capturedByGroups[1]}/${capturedByGroups[2]}-${capturedByGroups[3]}/`,
  ]
}