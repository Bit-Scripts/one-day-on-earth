let cloudContainer;

const seasonData = [
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2023-03-20T21:24:26"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2023-06-21T14:57:50"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2023-09-23T06:50:00"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2023-12-22T03:27:22"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2024-03-20T03:06:24"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2024-06-20T20:51:00"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2024-09-22T12:43:40"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2024-12-21T09:20:34"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2025-03-20T09:01:29"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2025-06-21T02:42:16"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2025-09-22T18:19:21"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2025-12-21T15:03:05"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2026-03-20T14:45:57"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2026-06-21T08:24:30"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2026-09-23T00:05:13"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2026-12-21T20:50:14"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2027-03-20T20:24:41"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2027-06-21T14:10:50"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2027-09-23T06:01:43"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2027-12-22T02:42:10"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2028-03-20T02:17:08"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2028-06-20T20:02:00"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2028-09-22T11:45:18"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2028-12-21T08:19:40"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2029-03-20T08:01:59"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2029-06-21T01:48:18"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2029-09-22T17:38:30"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2029-12-21T14:14:06"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2030-03-20T13:52:06"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2030-06-21T07:31:19"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2030-09-22T23:26:53"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2030-12-21T20:09:38"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2031-03-20T19:40:59"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2031-06-21T13:17:08"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2031-09-23T05:15:18"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2031-12-22T01:55:34"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2032-03-20T01:21:54"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2032-06-20T19:08:46"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2032-09-22T11:10:53"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2032-12-21T07:55:57"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2033-03-20T07:22:44"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2033-06-21T01:01:09"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2033-09-22T16:51:41"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2033-12-21T13:46:00"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2034-03-20T13:17:30"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2034-06-21T06:44:12"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2034-09-22T22:39:35"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2034-12-21T19:34:01"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2035-03-20T19:02:45"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2035-06-21T12:33:09"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2035-09-23T04:38:57"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2035-12-22T01:30:53"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2036-03-20T01:02:51"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2036-06-20T18:32:15"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2036-09-22T10:23:20"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2036-12-21T07:12:54"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2037-03-20T06:50:17"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2037-06-21T00:22:28"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2037-09-22T16:13:07"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2037-12-21T13:07:46"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2038-03-20T12:40:39"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2038-06-21T06:09:25"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2038-09-22T22:02:18"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2038-12-21T19:02:21"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2039-03-20T18:32:04"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2039-06-21T11:57:27"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2039-09-23T03:49:39"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2039-12-22T00:40:38"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2040-03-20T00:11:44"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2040-06-20T17:46:26"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2040-09-22T09:44:57"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2040-12-21T06:32:53"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2041-03-20T06:06:51"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2041-06-20T23:35:55"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2041-09-22T15:26:36"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2041-12-21T12:18:23"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2042-03-20T11:53:22"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2042-06-21T05:15:54"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2042-09-22T21:11:37"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2042-12-21T18:04:07"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2043-03-20T17:27:51"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2043-06-21T10:58:26"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2043-09-23T03:07:00"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2043-12-22T00:01:18"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2044-03-19T23:20:38"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2044-06-20T16:51:13"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2044-09-22T08:47:57"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2044-12-21T05:43:40"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2045-03-20T05:07:42"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2045-06-20T22:34:00"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2045-09-22T14:33:01"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2045-12-21T11:35:13"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2046-03-20T10:57:58"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2046-06-21T04:14:45"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2046-09-22T20:21:50"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2046-12-21T17:28:36"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2047-03-20T16:52:46"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2047-06-21T10:03:37"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2047-09-23T02:08:12"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2047-12-21T23:07:22"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2048-03-19T22:33:58"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2048-06-20T15:54:04"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2048-09-22T08:00:47"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2048-12-21T05:02:24"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2049-03-20T04:28:46"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2049-06-20T21:47:28"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2049-09-22T13:42:46"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2049-12-21T10:52:20"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2050-03-20T10:19:45"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2050-06-21T03:33:12"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2050-09-22T19:28:42"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2050-12-21T16:38:54"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2051-03-20T15:59:22"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2051-06-21T09:18:51"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2051-09-23T01:27:34"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2051-12-21T22:34:20"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2052-03-19T21:56:19"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2052-06-20T15:16:27"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2052-09-22T07:15:57"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2052-12-21T04:17:27"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2053-03-20T03:47:38"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2053-06-20T21:04:24"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2053-09-22T13:06:34"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2053-12-21T10:10:12"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2054-03-20T09:34:46"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2054-06-21T02:47:29"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2054-09-22T18:59:48"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2054-12-21T16:10:16"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2055-03-20T15:28:57"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2055-06-21T08:40:13"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2055-09-23T00:49:06"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2055-12-21T21:55:58"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2056-03-19T21:11:27"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2056-06-20T14:28:35"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2056-09-22T06:39:53"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2056-12-21T03:52:00"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2057-03-20T03:08:19"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2057-06-20T20:19:28"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2057-09-22T12:23:41"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2057-12-21T09:43:16"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2058-03-20T09:05:27"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2058-06-21T02:04:30"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2058-09-22T18:08:51"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2058-12-21T15:25:25"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2059-03-20T14:44:42"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2059-06-21T07:47:44"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2059-09-23T00:04:00"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2059-12-21T21:18:26"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2060-03-19T20:38:59"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2060-06-20T13:46:08"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2060-09-22T05:48:42"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2060-12-21T03:01:56"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2061-03-20T02:26:46"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2061-06-20T19:32:45"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2061-09-22T11:31:55"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2061-12-21T08:49:22"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2062-03-20T08:08:02"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2062-06-21T01:11:56"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2062-09-22T17:20:28"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2062-12-21T14:43:14"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2063-03-20T13:59:46"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2063-06-21T07:02:30"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2063-09-22T23:08:49"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2063-12-21T20:21:43"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2064-03-19T19:39:14"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2064-06-20T12:46:17"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2064-09-22T04:57:41"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2064-12-21T02:09:24"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2065-03-20T01:28:49"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2065-06-20T18:33:08"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2065-09-22T10:43:16"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2065-12-21T08:01:26"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2066-03-20T07:20:29"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2066-06-21T00:17:05"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2066-09-22T16:27:42"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2066-12-21T13:46:14"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2067-03-20T12:54:20"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2067-06-21T05:56:43"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2067-09-22T22:20:22"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2067-12-21T19:43:50"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2068-03-19T18:49:43"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2068-06-20T11:54:32"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2068-09-22T04:07:31"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2068-12-21T01:33:26"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2069-03-20T00:45:49"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2069-06-20T17:42:04"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2069-09-22T09:52:40"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2069-12-21T07:22:51"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2070-03-20T06:35:42"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2070-06-20T23:23:24"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2070-09-22T15:45:38"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2070-12-21T13:20:09"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2071-03-20T12:35:30"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2071-06-21T05:21:40"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2071-09-22T21:38:35"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2071-12-21T19:04:43"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2072-03-19T18:21:54"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2072-06-20T11:14:40"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2072-09-22T03:28:42"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2072-12-21T00:56:54"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2073-03-20T00:14:14"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2073-06-20T17:07:54"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2073-09-22T09:16:12"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2073-12-21T06:51:37"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2074-03-20T06:09:47"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2074-06-20T22:59:23"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2074-09-22T15:04:44"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2074-12-21T12:36:11"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2075-03-20T11:47:32"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2075-06-21T04:41:24"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2075-09-22T20:59:48"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2075-12-21T18:28:04"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2076-03-19T17:39:50"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2076-06-20T10:37:47"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2076-09-22T02:51:16"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2076-12-21T00:14:24"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2077-03-19T23:32:08"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2077-06-20T16:24:30"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2077-09-22T08:36:55"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2077-12-21T06:01:53"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2078-03-20T05:11:54"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2078-06-20T21:59:02"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2078-09-22T14:25:37"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2078-12-21T11:59:04"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2079-03-20T11:01:47"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2079-06-21T03:50:27"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2079-09-22T20:14:18"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2079-12-21T17:45:09"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2080-03-19T16:45:16"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2080-06-20T09:35:16"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2080-09-22T01:57:36"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2080-12-20T23:34:00"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2081-03-19T22:35:28"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2081-06-20T15:17:36"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2081-09-22T07:39:02"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2081-12-21T05:23:45"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2082-03-20T04:31:51"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2082-06-20T21:04:32"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2082-09-22T13:24:13"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2082-12-21T11:05:56"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2083-03-20T10:11:48"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2083-06-21T02:45:11"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2083-09-22T19:12:56"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2083-12-21T16:54:41"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2084-03-19T16:00:47"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2084-06-20T08:41:55"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2084-09-22T01:00:27"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2084-12-20T22:42:38"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2085-03-19T21:54:55"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2085-06-20T14:34:13"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2085-09-22T06:44:54"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2085-12-21T04:30:08"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2086-03-20T03:36:42"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2086-06-20T20:11:02"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2086-09-22T12:33:40"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2086-12-21T10:24:07"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2087-03-20T09:29:47"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2087-06-21T02:07:28"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2087-09-22T18:29:49"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2087-12-21T16:10:00"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2088-03-19T15:18:33"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2088-06-20T07:58:15"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2088-09-22T00:19:50"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2088-12-20T21:57:45"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2089-03-19T21:08:10"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2089-06-20T13:44:33"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2089-09-22T06:08:31"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2089-12-21T03:53:39"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2090-03-20T03:03:32"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2090-06-20T19:37:33"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2090-09-22T12:01:00"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2090-12-21T09:45:15"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2091-03-20T08:43:33"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2091-06-21T01:20:38"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2091-09-22T17:52:34"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2091-12-21T15:40:15"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2092-03-19T14:35:18"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2092-06-20T07:16:43"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2092-09-21T23:43:33"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2092-12-20T21:33:40"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2093-03-19T20:36:17"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2093-06-20T13:08:51"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2093-09-22T05:30:42"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2093-12-21T03:22:32"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2094-03-20T02:23:22"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2094-06-20T18:44:07"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2094-09-22T11:18:22"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2094-12-21T09:15:08"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2095-03-20T08:16:47"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2095-06-21T00:40:41"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2095-09-22T17:12:57"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2095-12-21T15:02:40"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2096-03-19T14:04:46"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2096-06-20T06:32:39"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2096-09-21T22:56:36"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2096-12-20T20:48:04"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2097-03-19T19:50:16"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2097-06-20T12:15:16"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2097-09-22T04:37:44"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2097-12-21T02:39:19"
    },
    {
        "Season":"Spring",
        "Phenomenon":"Spring equinox",
        "Date (UTC)":"2098-03-20T01:42:20"
    },
    {
        "Season":"Summer",
        "Phenomenon":"Summer solstice",
        "Date (UTC)":"2098-06-20T18:04:53"
    },
    {
        "Season":"Autumn",
        "Phenomenon":"Autumn equinox",
        "Date (UTC)":"2098-09-22T10:26:07"
    },
    {
        "Season":"Winter",
        "Phenomenon":"Winter Solstice",
        "Date (UTC)":"2098-12-21T08:22:44"
    }
];

const updateMaskColor = (season) => {
    //console.log('season-color-mask:', season);
    const mask = document.querySelector('.mask');
    // Enlever les classes de saison précédentes si elles existent
    mask.classList.remove('mask-spring', 'mask-summer', 'mask-autumn', 'mask-winter');
    // Ajouter la classe de saison actuelle
    mask.classList.add(`mask-${season}`);
    const clouds = document.querySelectorAll('.cloud'); // Sélectionne tous les éléments de nuage

    if (season == 'winter') {
        clouds.forEach(cloud => cloud.classList.add('cloud-winter'));
    } else {
        clouds.forEach(cloud => cloud.classList.remove('cloud-winter'));
    }
}

const updateBackgroundImage = (season) => {
    const backgroundImageUrl = {
        spring: 'url(An_image_representing_a_pretty_little_forest.png)',
        summer: 'url(An_image_representing_a_pretty_little_forest.png)',
        autumn: 'url(An_image_representing_a_pretty_little_forest.png)',
        winter: 'url(forest_setting_in_winter.png)'
    };

    const background = document.querySelector('.body-background');
    background.style.backgroundImage = backgroundImageUrl[season];
}

// Fonction pour animer l'opacité des superpositions
const animateOverlayOpacity = (overlaySelector, startOpacity, endOpacity, duration) => {
    //console.log(`Animating opacity for ${overlaySelector} from ${startOpacity} to ${endOpacity}`);
    const overlay = document.querySelector(overlaySelector);
    overlay.style.display = 'block';
    overlay.style.transition = `opacity ${duration}ms ease-in-out`;
    overlay.style.opacity = startOpacity;

    setTimeout(() => {
        overlay.style.opacity = endOpacity;
    }, 10);

    // Cachez la superposition si l'opacité finale est 0
    if (endOpacity === '0') {
        setTimeout(() => {
            overlay.style.display = 'none';
        }, duration);
    }
};

const applyNightMode = (isNight) => {
    const mistOverlay = document.querySelector('.mist-overlay');
    if (isNight) {
        mistOverlay.classList.add('night-mist-overlay');
    } else {
        mistOverlay.classList.remove('night-mist-overlay');
    }
    const masks = document.querySelectorAll('.mask, .mask-spring, .mask-summer, .mask-autumn, .mask-winter');
    masks.forEach(mask => {
        if (isNight) {
            mask.classList.add('night-mask');
        } else {
            mask.classList.remove('night-mask');
        }
    });
};

const toggleCloudStyle = (isNight) => {
    const clouds = document.querySelectorAll('.cloud');
    // console.log('isNight:',isNight);
    // console.log('clouds:',clouds);
    clouds.forEach(cloud => {
        if (isNight) {
            cloud.classList.remove('cloud-day');
            cloud.classList.add('cloud-night');
            // console.log('cloud.classList:', cloud.classList);
        } else {
            cloud.classList.remove('cloud-night');
            cloud.classList.add('cloud-day');
            // console.log('cloud.classList:', cloud.classList);
        }
    });
};

const showMoon = () => {
    const moon = document.querySelector('.moon');
    moon.style.display = 'block';
    moon.style.opacity = 0; // Commencez avec une opacité de 0
    moon.style.zIndex = 5;
    setTimeout(() => {
        moon.style.opacity = 1; // Rendre la lune complètement visible
    }, 10);
};

const hideMoon = () => {
    const moon = document.querySelector('.moon');
    moon.style.opacity = 0; // Rendre la lune complètement transparente
    setTimeout(() => {
        moon.style.display = 'none';
    }, 3000); // Attendre la fin de la transition avant de cacher la lune
};

// Fonction pour gérer la transition de l'aube/crépuscule à la nuit et inversement
const transitionDayNightCycle = (currentDate, sunRise, sunSet) => {
    const now = currentDate.getTime();
    const sunriseTime = sunRise.getTime();
    const sunsetTime = sunSet.getTime();

    // Calculer le temps restant jusqu'au prochain lever/coucher du soleil
    let timeUntilSunset = (now >= sunsetTime) ? (sunsetTime + 24 * 60 * 60 * 1000 - now) : (sunsetTime - now);
    let timeUntilSunrise = (now >= sunriseTime) ? (sunriseTime + 24 * 60 * 60 * 1000 - now) : (sunriseTime - now);

    const transitionDuration = 3000;

    const clouds = document.querySelectorAll('.cloud');

    // Vérifier si c'est actuellement la nuit ou le jour
    if (now < sunriseTime || now >= sunsetTime) {
        // C'est la nuit
        showMoon();
        applyNightMode(true);
        toggleCloudStyle(true);
        animateOverlayOpacity('.night-overlay', '0', '.9', transitionDuration); // Appliquer immédiatement l'effet de nuit
    } else {
        // C'est le jour
        hideMoon();
        applyNightMode(false);
        toggleCloudStyle(false);
        animateOverlayOpacity('.night-overlay', '.9', '0', transitionDuration); // Enlever immédiatement l'effet de nuit
    }

    // Planifier les transitions pour le lever et le coucher du soleil
    setTimeout(() => {
        animateOverlayOpacity('.dawn-dusk-overlay', '0.7', '0', transitionDuration); // Transition du crépuscule
    }, timeUntilSunset);

    setTimeout(() => {
        animateOverlayOpacity('.dawn-dusk-overlay', '0', '0.7', transitionDuration); // Transition de l'aube
    }, timeUntilSunrise);

    // Répéter le cycle pour le jour suivant
    setTimeout(() => {
        transitionDayNightCycle(new Date(currentDate.getTime() + 24 * 60 * 60 * 1000), sunRise, sunSet);
    }, Math.min(timeUntilSunrise, timeUntilSunset));
};

let flashInterval;

const startFlashEffect = () => {
    const flashOverlay = document.querySelector('.flash-overlay');

    flashInterval = setInterval(() => {
        // console.log('FLASH !');
        flashOverlay.style.display = 'block';

        setTimeout(() => {
            flashOverlay.style.display = 'none';
        }, 100); // Durée du flash
    }, 2000); // Intervalle entre les flashs
}
    
const stopFlashEffect = () => {
    clearInterval(flashInterval);
}

const rainConfig = {
    "particles": {
        "number": {
            "value": 100, // Augmentez pour plus de densité
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#add8e6" // Bleu clair
        },
        "opacity": {
            "value": 0.8, // Augmentez l'opacité pour plus de visibilité
            "random": false
        },
        "size": {
            "value": 3, // Taille des particules pour simuler des gouttes de pluie
            "random": true
        },
        "line_linked": {
            "enable": false // Désactivez la liaison entre les particules
        },
        "move": {
            "enable": true,
            "speed": 10, // Vitesse plus élevée pour simuler la chute rapide des gouttes de pluie
            "direction": "bottom",
            "straight": true
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
};

const heavyRainConfig = {
    "particles": {
        "number": {
            "value": 400, // Plus de particules pour une averse plus dense
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#a9a9a9"
        },
        "opacity": {
            "value": 0.8,
            "random": false
        },
        "size": {
            "value": 10, // Gouttes un peu plus grandes
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 25, // Vitesse plus rapide
            "direction": "bottom",
            "straight": true
        },
        "shape": {
            "type": "edge",
        },
        "size": {
            "value": 2
        }      
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
};

const snowConfig = {
    "particles": {
        "number": {
            "value": 1600,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff" // Particules blanches pour la neige
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 3, // Taille légèrement plus grande pour simuler les flocons de neige
            "random": true
        },
        "line_linked": {
            "enable": false
        },
        "move": {
            "enable": true,
            "speed": 2, // La neige tombe plus lentement que la pluie
            "direction": "bottom",
            "straight": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false
            },
            "onclick": {
                "enable": false
            },
            "resize": true
        }
    },
    "retina_detect": true
};

const createCloud = (cloudCount) => {
    // Remove any existing clouds
    if (cloudContainer) {
        document.body.removeChild(cloudContainer);
    }

    // Create a container for the clouds
    cloudContainer = document.createElement('div');
    cloudContainer.style.position = 'relative';
    cloudContainer.style.width = '100%';
    cloudContainer.style.height = '300px';

    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        const randomOpacity = 0.3 + Math.random() * 0.2; // Opacité entre 0.3 et 0.5
        const randomWidth = 180 + Math.random() * 40; // Largeur entre 180px et 220px
        const randomHeight = 90 + Math.random() * 20; // Hauteur entre 90px et 110px

        cloud.style.width = `${randomWidth}px`;
        cloud.style.height = `${randomHeight}px`;
        cloud.style.opacity = randomOpacity;
        cloud.style.backgroundImage = 'url("./cloud-day.png")';
        cloud.style.backgroundSize = `${randomWidth}px ${randomHeight}px`;
        cloud.style.backgroundRepeat = 'no-repeat';
        cloud.style.position = 'absolute';
        cloud.style.left = `${Math.random() * (window.innerWidth - randomWidth)}px`;
        cloud.style.top = `${Math.random() * (300 - randomHeight)}px`;
        cloud.classList.add('cloud');
        const maxCloudZIndex = 10; // Exemple
        cloud.style.zIndex = 6 + (i % (maxCloudZIndex - 3)); // Assurez-vous que les nuages restent dans une plage spécifique
        
        cloudContainer.appendChild(cloud);
    }

    // Add the container to the document
    document.body.appendChild(cloudContainer);
}

const changeWeather = (type) => {
    const body = document.querySelector('body'); // Sélectionnez l'élément HTML sur lequel vous souhaitez appliquer le filtre
    switch (type) {
        case '01':
            animateOverlayOpacity('.blue-sky-overlay', '0', '0.9', 3000);
            createCloud(0);
            stopFlashEffect();
            break;
        case '02':
            createCloud(10);
            stopFlashEffect();
            break;
        case '03':
            createCloud(20);
            stopFlashEffect();
            break;
        case '04':
            createCloud(60);
            particlesJS('particles-js', rainConfig);
            stopFlashEffect();
            break;
        case '09':
            createCloud(30);
            particlesJS('particles-js', heavyRainConfig);
            stopFlashEffect();
            break;
        case '10':
            createCloud(20);
            particlesJS('particles-js', rainConfig);
            stopFlashEffect();
            break;
        case '11':
            createCloud(30);
            particlesJS('particles-js', heavyRainConfig);
            startFlashEffect();
            break;
        case '13':
            createCloud(30);
            particlesJS('particles-js', snowConfig);
            stopFlashEffect();
            break;
        case '50':
            animateOverlayOpacity('.blur-effect', '0', '0.4', 3000);
            animateOverlayOpacity('.mist-overlay', '0', '0.6', 3000);
            createCloud(30);
            break;
        default:
            console.log('Type de temps inconnu:', type);
            // Logique pour cas par défaut ou non reconnu
    } 
}

const getSeason = (currentDate, latitude) => {
    let currentSeason = null;
    let lastSeasonChange = null;

    for (let event of seasonData) {
        let eventDate = new Date(event["Date (UTC)"]);
        
        // Si la date de l'événement est passée, mais plus récente que le dernier changement de saison
        if (eventDate <= currentDate && (!lastSeasonChange || eventDate > lastSeasonChange)) {
            lastSeasonChange = eventDate;
            currentSeason = event["Season"];
        }
    }
    if (latitude < 0) {
        switch (currentSeason) {
            case 'Winter':
                currentSeason = 'Summer';
                break;
            case 'Spring':
                currentSeason = 'Autumn';
                break;
            case 'Summer':
                currentSeason = 'Winter';
                break;
            case 'Autumn':
                currentSeason = 'Spring';
                break;
            default:
                console.log('Saison inconnue');
                break;
        }
    }
    return currentSeason;
}

window.addEventListener('DOMContentLoaded', async (event) => {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(async position => {
            const { latitude, longitude } = position.coords;
            // console.log ('position:',position)
            // Récupérer les données météorologiques
            const weatherData = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=01887dff1f41659d9505ec7a41906ace&units=metric&lang=fr`
            ).then(r => r.json());
            
            //console.log('weatherData:', weatherData);

            // Mise à jour du cycle jour/nuit, de la saison et de la météo
            const currentDate = new Date();
            //currentDate.setHours(21, 0, 0); // Heures, minutes, secondes
            const season = getSeason(currentDate, latitude).toLowerCase();
            // Vous pouvez modifier cette logique pour utiliser les données météo
            //console.log('season:',season);
            updateBackgroundImage(season);
            const background = document.querySelector('.body-background');
            // Enlever les classes de saison précédentes si elles existent
            background.classList.remove('spring-filter', 'summer-filter', 'autumn-filter', 'winter-filter');
            // Ajouter la classe de saison actuelle
            background.classList.add(`${season}-filter`);
            updateMaskColor(season);
            myweather = weatherData.weather[0].icon.toLowerCase().match(/\d+/g);
            myweathertxt = myweather ? myweather.join("") : "";
            //console.log('myweathertxt:',myweathertxt)
            changeWeather(myweathertxt);

            // Gestion du cycle jour/nuit en fonction du lever et du coucher du soleil
            const sunRise = new Date(weatherData.sys.sunrise * 1000);
            const sunSet = new Date(weatherData.sys.sunset * 1000);

            // Pour les tests, définissez des heures de lever et de coucher du soleil factices
            // const sunRise = new Date(currentDate.getTime());
            // sunRise.setHours(6, 0, 0); // Lever du soleil à 6h00

            // const sunSet = new Date(currentDate.getTime());
            // sunSet.setHours(17, 0, 0); // Coucher du soleil à 16h00

            transitionDayNightCycle(currentDate, sunRise, sunSet);
        }, error => {
            console.error('Erreur lors de la récupération de la localisation:', error);
        });
    } else {
        console.log('La géolocalisation n\'est pas prise en charge par ce navigateur.');
    }
});