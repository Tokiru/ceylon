import groovy.transform.CompileStatic
import java.text.SimpleDateFormat

@CompileStatic
class TimeStamp {
    static final BUILD_START = new Date()
    static final String BUILD = {
        SimpleDateFormat df = new SimpleDateFormat ("'v'yyyyMMdd-HHmm")
        return df.format (BUILD_START)
    }.call()
    static final String DSTAMP = {
        SimpleDateFormat df = new SimpleDateFormat ("yyyyMMdd")
        return df.format (BUILD_START)
    }.call()
    static final String NOW = {
        SimpleDateFormat df = new SimpleDateFormat ("yyyyMMddHHmm")
        return df.format (BUILD_START)
    }.call()
    static final String TODAY = {
        SimpleDateFormat df = new SimpleDateFormat ("MMM dd yyyy")
        return df.format (BUILD_START)
    }.call()
    static final String TSTAMP = {
        SimpleDateFormat df = new SimpleDateFormat ("HHmm")
        return df.format (BUILD_START)
    }.call()
}
